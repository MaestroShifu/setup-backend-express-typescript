import { AuthContract } from '../../../../src/domain/contracts/auth-contracts';
import { PayloadToken } from '../../../../src/domain/entities/user';

class MockAuthContract implements AuthContract {
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
  tokenValidate(password: string, hash: string) {
    return password === this.reverseString(hash);
  }
}

export default MockAuthContract;
