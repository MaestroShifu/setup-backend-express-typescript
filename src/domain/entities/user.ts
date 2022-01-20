export type User = {
  _id: string;
  email: string;
  name: string;
  lastName: string;
  phone?: string;
  password: string;
  language: 'es' | 'en';
};
