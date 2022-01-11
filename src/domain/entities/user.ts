export type User = {
  id: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  password: string;
  language: 'es' | 'en';
};

export type LoginAuth = Omit<User, 'password'> & { token: string };
