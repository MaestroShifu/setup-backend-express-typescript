import { User } from '../entities/user';

export interface UserContract {
  create(user: Omit<User, '_id'>): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
