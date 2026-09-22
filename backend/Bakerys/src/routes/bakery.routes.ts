import { Router } from 'express';
import { getProducts, getInfo, getStatus } from '../handlers/bakery.handler';

const router = Router();

router.get('/', getStatus);
router.get('/api/products', getProducts);
router.get('/api/info', getInfo);

export default router;
