import { User, LoginAuth } from '../entities/user';

export interface UserContract {
  login(user: User): Promise<LoginAuth>;
  create(user: Omit<User, 'id'>): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
