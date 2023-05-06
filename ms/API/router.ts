import express from 'express';
import { getImagesByCategory } from './imagesCont';
const router = express.Router();

router.get("/getImages", getImagesByCategory)

export default router;