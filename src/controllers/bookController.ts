import { Request, Response } from 'express';
import { BookModel } from '../models/bookModel';

export const getBooks = async (req: Request, res: Response) => {
  const books = await BookModel.getAll();
  res.json(books);
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await BookModel.getById(Number(req.params.id));
  res.json(book);
};

export const getBooksByAuthor = async (req: Request, res: Response) => {
  const books = await BookModel.getByAuthor(Number(req.params.id));
  res.json(books);
};

export const createBook = async (req: Request, res: Response) => {
  const newBook = await BookModel.create(req.body);
  res.status(201).json(newBook);
};

export const updateBook = async (req: Request, res: Response) => {
  await BookModel.update(Number(req.params.id), req.body);
  res.status(204).send();
};

export const deleteBook = async (req: Request, res: Response) => {
  await BookModel.delete(Number(req.params.id));
  res.status(204).send();
};
