import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
  } from 'eventsource-parser'
  
  export type Agent = 'user' | 'system' | 'assistant'
  
  export interface Message {
    role: ChatGPTAgent
    content: string
  }
  
  export interface StreamPayload {
    model: string
    messages: Message[]
    temperature: number
    top_p: number
    frequency_penalty: number
    presence_penalty: number
    max_tokens: number
    stream: boolean
    stop?: string[]
    user?: string
    n: number
  }
  
  export async function OpenAIStream(payload: StreamPayload) {
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
  
    let counter = 0
  
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    })
  
    const stream = new ReadableStream({
      async start(controller) {
        // callback
        function onParse(event: ParsedEvent | ReconnectInterval) {
          if (event.type === 'event') {
            const data = event.data
            // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
            if (data === '[DONE]') {
              console.log('DONE')
              controller.close()
              return
            }
            try {
              const json = JSON.parse(data)
              const text = json.choices[0].delta?.content || ''
              if (counter < 2 && (text.match(/\n/) || []).length) {
                // this is a prefix character (i.e., "\n\n"), do nothing
                return
              }
              const queue = encoder.encode(text)
              controller.enqueue(queue)
              counter++
            } catch (e) {
              // maybe parse error
              controller.error(e)
            }
          }
        }
  
        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks and invoke an event for each SSE event stream
        const parser = createParser(onParse)
        for await (const chunk of res.body as any) {
          parser.feed(decoder.decode(chunk))
        }
      },
    })
  
    return stream
  }