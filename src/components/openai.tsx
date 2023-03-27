import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateResponse(prompt) {
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt: "",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  });

  return response.data.choices[0].text;
}
