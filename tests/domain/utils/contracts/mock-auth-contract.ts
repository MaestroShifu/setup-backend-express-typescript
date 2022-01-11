import { User } from '../../../../src/domain/entities/user';
import { PayloadToken } from '../../../../src/infraestructure/auth/jwt';
import { AuthContract } from '../../../../src/domain/contracts/auth-contracts';

class MockAuthContract implements AuthContract<PayloadToken> {
  constructor(public user: User) {}
  reverseString(text: string) {
    return text.split('').reverse().join('');
  }
  passwordEncrypt(password: string) {
    return this.reverseString(password);
  }
  passwordValidate(password: string, hash: string) {
    return password === this.reverseString(hash);
  }
  tokenGenerate(payload: PayloadToken) {
    return payload.sub;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tokenVerify(_hash: string): PayloadToken {
    return {
      sub: '12345',
      iss: `${this.user.name}-${this.user.lastName}`,
      iat: new Date().getTime()
    };
  }
}

export default MockAuthContract;
