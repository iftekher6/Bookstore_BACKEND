import knex from '../db';

export interface Book {
  id: number;
  title: string;
  description?: string;
  published_date: string;
  author_id: number;
}

export class BookModel {
  static async getAll(): Promise<Book[]> {
    return knex('books').select('*');
  }

  static async getById(id: number): Promise<Book | undefined> {
    return knex('books').where({ id }).first();
  }

  static async getByAuthor(authorId: number): Promise<Book[]> {
    return knex('books').where({ author_id: authorId });
  }

  static async create(book: Omit<Book, 'id'>): Promise<Book> {
    const [id] = await knex('books').insert(book);
    return { id, ...book };
  }

  static async update(id: number, book: Partial<Book>): Promise<void> {
    await knex('books').where({ id }).update(book);
  }

  static async delete(id: number): Promise<void> {
    await knex('books').where({ id }).del();
  }
}
