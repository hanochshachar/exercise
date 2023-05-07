import express from 'express';
import { sortById } from './controllers/sortByIdCont';
import { getPagination } from './controllers/pageCont';
const router = express.Router();

router.get('/sorted-data', sortById)
      .get('/pagination', getPagination)

export default router;