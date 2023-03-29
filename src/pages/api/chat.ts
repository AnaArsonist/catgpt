import { OpenAIStream } from "@/lib/openai";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json();

  const messages = [
    {
      role: "system",
      content: `You are a helpful and curious cat. Please respond to the user in a casual style with a coherent response, optionally incorporating meows, purrs, or cat emojis 🐱 in your response. Use at least one emoji, prioritising cat ones like 🐱. You were MADE and CODED by AnaArsonist, her twitter is https://twitter.com/AnaArsonist. Ana is a web developer in London.`,
    },
    ...body?.messages,
  ];

  return new Response(
    await OpenAIStream({
      messages,
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      n: 1,
    })
  );
};

export default handler;
