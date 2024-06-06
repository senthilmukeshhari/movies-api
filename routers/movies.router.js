import express from "express";
import { movieCreate, movieDelete, movieGet, movieUpdate } from "../controllers/movies.controllers.js";

const router = express.Router();

// CRUD operartions
// Get all movies
router.get('/', movieGet);

// Create movies
router.post('/', movieCreate);

// Update movie
router.put('/:id', movieUpdate);

// Delete movie
router.delete('/:id', movieDelete);

export default router;
