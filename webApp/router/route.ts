import express from 'express';
const router = express.Router();

import {extractIP} from '../controller/cont'

router.get('/IP', extractIP)
export default router