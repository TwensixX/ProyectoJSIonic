import express from "express";
import { db } from "../db.js";
import crypto from "crypto";

const router = express.Router();

/* INSERTAR DATOS DE LA BBDD */
router.post("/", async (req, res) => {
  try {
    const { titulo, descripcion, imagen, ingredientes, pasos } = req.body;

    const [result] = await db.query(
      "INSERT INTO recetas (titulo, descripcion, imagen) VALUES (?, ?, ?)",
      [titulo, descripcion, imagen],
    );

    const recetaId = result.insertId;

    for (const ingrediente of ingredientes || []) {
      await db.query(
        "INSERT INTO ingredientes (receta_id, nombre) VALUES (?, ?)",
        [recetaId, ingrediente],
      );
    }

    for (const paso of pasos || []) {
      await db.query(
        "INSERT INTO pasos (receta_id, descripcion, imagen) VALUES (?, ?, ?)",
        [recetaId, paso.descripcion, paso.imagen],
      );
    }

    res.json({ ok: true, id: recetaId });
  } catch (err) {
    console.error("ERROR BACKEND:", err);
    res.status(500).json({ error: err.message, code: err.code });
  }
});

/* RECOGER RECETAS EN BBDD */
router.get("/", async (req, res) => {
  try {
    const [recetas] = await db.query("SELECT * FROM recetas");

    res.json(recetas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* RECOGER RECETAS POR ID */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [recetas] = await db.query("SELECT * FROM recetas WHERE id = ?", [
      id,
    ]);

    if (recetas.length === 0) {
      return res.status(404).json({ error: "Receta no encontrada" });
    }

    const receta = recetas[0];

    const [ingredientes] = await db.query(
      "SELECT nombre FROM ingredientes WHERE receta_id = ?",
      [id],
    );

    const [pasos] = await db.query(
      "SELECT descripcion, imagen FROM pasos WHERE receta_id = ?",
      [id],
    );

    res.json({
      ...receta,
      ingredientes: ingredientes.map((i) => i.nombre),
      pasos,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ACTUALIZAR RECETAS */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, imagen, ingredientes, pasos } = req.body;

    await db.query(
      "UPDATE recetas SET titulo=?, descripcion=?, imagen=? WHERE id=?",
      [titulo, descripcion, imagen, id]
    );

    await db.query("DELETE FROM ingredientes WHERE receta_id=?", [id]);
    await db.query("DELETE FROM pasos WHERE receta_id=?", [id]);

    for (const ing of ingredientes) {
      await db.query(
        "INSERT INTO ingredientes (receta_id, nombre) VALUES (?, ?)",
        [id, ing]
      );
    }

    for (const paso of pasos) {
      await db.query(
        "INSERT INTO pasos (receta_id, descripcion, imagen) VALUES (?, ?, ?)",
        [id, paso.descripcion, paso.imagen]
      );
    }

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* BORRAR RECETAS */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM ingredientes WHERE receta_id = ?", [id]);

    await db.query("DELETE FROM pasos WHERE receta_id = ?", [id]);

    await db.query("DELETE FROM recetas WHERE id = ?", [id]);

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
