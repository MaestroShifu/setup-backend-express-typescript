import loginAuth from '../../../src/domain/interactors/auth/login-auth';
import MockAuthContract from '../utils/contracts/mock-auth-contract';
import getMockUser from '../utils/entities/mock-user';

const mockUser = getMockUser({ email: 'test@test.com' });
const mockAuthContract = new MockAuthContract(mockUser);

describe('Login Auth', () => {
  it('Generate new token', (done) => {
    const useCase = loginAuth(mockAuthContract);
    useCase(mockUser).then((res) => {
      expect(res._id).toEqual(mockUser._id);
      expect(res).toHaveProperty('token');
      done();
    });
  });
});
