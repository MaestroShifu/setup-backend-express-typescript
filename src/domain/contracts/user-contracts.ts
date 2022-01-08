import { User } from '../entities/user';

export interface UserContract {
  create(user: Omit<User, 'id'>): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
