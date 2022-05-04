import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const resolve = (dir: string) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.resolve(__dirname, "frontend", dir);
};

const PORT = process.env.PORT || 3000;

/* Ensure any requests prefixed with /static will serve our "src/static" directory */
app.use("/static", express.static(resolve("static")));

/* Redirect all routes to our (soon to exist) "index.html" file */
app.get("/*", (req: Request, res: Response) => {
  res.sendFile(resolve("index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running... [Port: ${PORT}`);
});
