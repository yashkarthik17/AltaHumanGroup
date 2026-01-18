
import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getAllyshipAdvice = async (topic: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Unable to connect to AI services. Please check your configuration.";

  try {
    const model = 'gemini-2.5-flash-preview'; 
    const prompt = `
      You are an expert on civil rights history, specifically Anti-Black racism (Anti-Black), and allyship for the Black community.
      The user is asking for advice or information on: "${topic}".
      
      Provide a concise, empathetic, and actionable response (under 150 words). 
      
      Guidelines:
      1. Specifically address Anti-Black prejudice if relevant (the specific marginalization of Black people).
      2. Provide historical context or practical steps to stand against hate.
      3. Tone: Serious, educational, and inspiring.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are currently experiencing high traffic. Please try again later.";
  }
};