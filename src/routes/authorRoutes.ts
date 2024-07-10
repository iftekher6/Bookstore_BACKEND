import express from 'express';
import {body} from 'express-validator'
import {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  getAllBooksByAuthor,
} from '../controllers/authorController';
// import { authorValidationRules, validate } from '../middlewares/validationMiddleware';

export const authorRouter = express.Router();

authorRouter.get('/', getAuthors);
authorRouter.get('/:id', getAuthorById);
authorRouter.get('/:id/books', getAllBooksByAuthor);
authorRouter.post('/',  
 body('name').isString().notEmpty(),
body('birthdate').isDate()
, createAuthor);
authorRouter.put('/:id',
  body('name').optional().isString().notEmpty(),
  body('birthdate').optional().isDate(),
updateAuthor);
authorRouter.delete('/:id', deleteAuthor);
