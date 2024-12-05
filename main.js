import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/get", async (req, res) => {
  const input = req.body;
    const text = input.msg;
    console.log(input)
    console.log(text)
    const genAI = new GoogleGenerativeAI(process.env.SECRET_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Answer to these questions in medium length yet short : ${text}`;
    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      res.status(200).send(result);
    } catch (er) {
      console.log(`Error creating response : ${er}`);
    }

});


app.listen(process.env.PORT || port, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});
