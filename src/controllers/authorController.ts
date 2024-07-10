import { Request, Response } from 'express'
// import { request, response } from 'express';
import { AuthorModel } from '../models/authorModel';

export const getAuthors = async (req: Request, res: Response) => {
  const authors = await AuthorModel.getAll();
  res.json(authors);
};

export const getAuthorById = async (req: Request, res: Response) => {
  const author = await AuthorModel.getById(Number(req.params.id));
  res.json(author);
};

export const getAllBooksByAuthor = async (req: Request, res: Response) => {
  const books = await AuthorModel.getAllBooksByAuthor();
  res.json(books);
};

export const createAuthor = async (req: Request, res: Response) => {
  const newAuthor = await AuthorModel.create(req.body);
  res.status(201).json(newAuthor);
};

export const updateAuthor = async (req: Request, res: Response) => {
  await AuthorModel.update(Number(req.params.id), req.body);
  res.status(204).send();
};

export const deleteAuthor = async (req: Request, res: Response) => {
  await AuthorModel.delete(Number(req.params.id));
  res.status(200).send()
};
