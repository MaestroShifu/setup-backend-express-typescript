export type User = {
  id: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  password: string;
  language: 'es' | 'en';
};

export type PayloadToken = {
  sub: string;
  iss: string; // User name - email - name or lastname
  iat: number; // Timestamp create token
};

export type LoginAuth = Omit<User, 'password'> & { token: string };
