async function generateResponse(prompt) {
    const response = await openai.completions.create({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 60,
      n: 1,
      stop: ['\n']
    });
  
    return response.choices[0].text.trim();
  }

  app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const response = await generateResponse(message);
    res.json({ message: response });
  });