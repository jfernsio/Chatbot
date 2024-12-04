import { GoogleGenerativeAI } from "@google/generative-ai";

const wait = async (p) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyB_Ta-tIuKBeXq3r1Berc49pXYasNzgork"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // const { title, paragraphs } = await scrapData();
  // const text = paragraphs.join(' ');
  const prompt = `Answer to these questions in medium length yet short : ${p}`;
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (er) {
    console.log(`Error creating response : ${er}`);
  }
};

