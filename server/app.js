import express from "express";
import recetasRoutes from "./routes/recetas.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "50mb" })); // IMPORTANTE para imágenes base64

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/recetas", recetasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
