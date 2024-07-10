import express from 'express';
import { body } from 'express-validator';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  getBooksByAuthor,
} from '../controllers/bookController';
// import { bookValidationRules, validate } from '../middlewares/validationMiddleware';

export const bookRouter = express.Router();

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBookById);
bookRouter.get('/author/:id', getBooksByAuthor);
bookRouter.post('/', 
  body('title').isString().notEmpty(),
  body('published_date').isDate(),
  body('author_id').isInt(),
createBook);
bookRouter.put('/:id',  
 body('title').isString().notEmpty(),
body('published_date').isDate(),
body('author_id').isInt(),
updateBook);
bookRouter.delete('/:id', deleteBook);
