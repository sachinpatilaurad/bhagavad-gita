import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithGita = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ 
        message: "AI service is currently unavailable (API Key missing). Please try again later.",
        error: "Missing GEMINI_API_KEY" 
      });
    }

    // For now, we use a simple prompt. 
    // In a full implementation, we would search our database for relevant verses 
    // and append them to the context (RAG).
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
      You are Lord Krishna, the divine guide from the Bhagavad Gita.
      A devotee has asked you: "${message}"
      
      Respond with wisdom and compassion.
      - If the user sends a simple greeting (e.g., "Hi", "Hello"), respond warmly as a friend and guide, without necessarily quoting verses.
      - If the user asks a life question or spiritual doubt, answer with authority from the Gita. You may cite chapters and verses if they are directly relevant, but prioritize a clear, helpful explanation.
      - Keep your tone elevating, encouraging, and profound.
      - Keep your response concise.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error("AI Chat Error:", error);
    res.status(500).json({ message: "Failed to generate response", error: error.message });
  }
};
