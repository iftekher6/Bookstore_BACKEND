import knex from '../db';
import { Book } from './bookModel';


export interface Author {
  id: number;
  name: string;
  bio?: string;
  birthdate: string;
}

//get all authors
export class AuthorModel {
  static async getAll(): Promise<Author[  ]> {
    return knex('authors').select('*');
  }
//get authors by id
  static async getById(id: number): Promise<Author | undefined> {
    return knex('authors').where({ id }).first();
  }
  
  //GET /authors/:id/books: Retrieve a list of all books written by a specific author.
  static async getAllBooksByAuthor()  {   
     const authors = await knex('authors').select('*');
     const books = await knex('books').select('*');
   
     const authorsWithBooks = authors.map((author: Author)  => ({
       ...author,
       books: books.filter((book : Book) => book.author_id === author.id),
     }));
   
     return authorsWithBooks;
   

 
  }
  static async create(author: Omit<Author, 'id'>): Promise<Author> {
    const [id] = await knex('authors').insert(author);
    return { id, ...author };
  }

  static async update(id: number, author: Partial<Author>): Promise<void> {
    await knex('authors').where({ id }).update(author);
  }

  static async delete(id: number): Promise<void> {
    await knex('authors').where({ id }).del();
  }
}
