import express from "express";
import { db } from "../db.js";
import crypto from "crypto";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { titulo, descripcion, imagen, ingredientes, pasos } = req.body;

    // Bug 1 fix: tabla "receta", Bug 2 fix: sin id manual
    const [result] = await db.query(
      "INSERT INTO recetas (titulo, descripcion, imagen) VALUES (?, ?, ?)",
      [titulo, descripcion, imagen]
    );

    const recetaId = result.insertId; // Bug 2 fix: id real de MySQL

    for (const ingrediente of ingredientes || []) {
      await db.query(
        "INSERT INTO ingredientes (receta_id, nombre) VALUES (?, ?)",
        [recetaId, ingrediente]
      );
    }

    for (const paso of pasos || []) {
      await db.query(
        "INSERT INTO pasos (receta_id, descripcion, imagen) VALUES (?, ?, ?)",
        [recetaId, paso.descripcion, paso.imagen]
      );
    }

    res.json({ ok: true, id: recetaId });
  } catch (err) {
    console.error("ERROR BACKEND:", err);
    res.status(500).json({ error: err.message, code: err.code });
  }
});

router.get("/", async (req, res) => {
  try {
    const [recetas] = await db.query("SELECT * FROM recetas");

    res.json(recetas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
