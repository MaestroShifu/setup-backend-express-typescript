import { UserContract } from '../../../../src/domain/contracts/user-contracts';
import { User } from '../../../../src/domain/entities/user';

class MockUserContact implements UserContract {
  constructor(public user: User) {}
  create(user: User) {
    return Promise.resolve(user);
  }
  findByEmail(email: string) {
    return Promise.resolve(email === this.user.email ? undefined : this.user);
  }
}

export default MockUserContact;
