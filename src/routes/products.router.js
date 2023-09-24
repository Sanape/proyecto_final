import { Router } from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addImagesToProductById,
  deleteImageFromProductById,
} from '../controllers/productsController.js';
import { body_must_contain_attributes } from '../middlewares/validateBodyRequirements.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/', getAllProducts);

router.get('/:pid', getProductById);

router.post(
  '/',
  upload.array('photos'),
  body_must_contain_attributes([
    'title',
    'description',
    'price',
    'code',
    'status',
    'stock',
    'category',
  ]),

  addProduct
);

router.put('/:pid', upload.array('photos'), updateProductById);

router.post('/:pid', upload.array('photos'), addImagesToProductById);

router.delete('/:pid', deleteProductById);

router.delete('/:pid/image/:imageId', deleteImageFromProductById);
export default router;
