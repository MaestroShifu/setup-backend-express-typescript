import { UserContract } from '../../../../src/domain/contracts/user-contracts';
import { User, LoginAuth } from '../../../../src/domain/entities/user';

class MockUserContact implements UserContract {
  constructor(public user: User) {}
  create(user: User) {
    return Promise.resolve(user);
  }
  findByEmail(email: string) {
    return Promise.resolve(email === this.user.email ? undefined : this.user);
  }
  login(user: User) {
    const newUser = { ...user };
    const authUser: LoginAuth = {
      ...newUser,
      token: 'QAZWSXEDCRFVTGB'
    };
    return Promise.resolve(authUser);
  }
}

export default MockUserContact;
