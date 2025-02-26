// You can declare global types in TypeScript, which will help you keep your code organized and reusable and we'll able to reuse across all the other files without even needing to import them.

interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
