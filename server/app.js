import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// ---- paths ES Modules ----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../data/recetas.json");
const UPLOADS_DIR = path.join(__dirname, "../public/uploads");

// ---- middleware ----
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// ---- MULTER CONFIG ----
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname;
    cb(null, unique);
  }
});

const upload = multer({ storage });

// ---- helpers JSON ----
function leerRecetas() {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

function guardarRecetas(recetas) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(recetas, null, 2));
}

// ---- ROUTES ----

// GET todas las recetas
app.get("/api/recetas", (req, res) => {
  const recetas = leerRecetas();
  res.json(recetas);
});

// POST nueva receta (con imagen)
app.post("/api/recetas", upload.any(), (req, res) => {
  try {
    const recetas = leerRecetas();

    const receta = JSON.parse(req.body.data);

    const files = req.files;

    const imagenPrincipal = files.find(f => f.fieldname === "imagen");

    const pasos = receta.pasos.map((p, i) => {
      const imgFile = files.find(f => f.fieldname === `paso-${i}`);

      return {
        descripcion: p.descripcion,
        imagen: imgFile ? `/uploads/${imgFile.filename}` : null
      };
    });

    const nuevaReceta = {
      id: Date.now(),
      titulo: receta.titulo,
      descripcion: receta.descripcion,
      ingredientes: receta.ingredientes,
      imagen: imagenPrincipal ? `/uploads/${imagenPrincipal.filename}` : null,
      pasos
    };

    recetas.push(nuevaReceta);
    guardarRecetas(recetas);

    res.json({ ok: true, receta: nuevaReceta });

  } catch (err) {
    console.error("ERROR BACKEND:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});