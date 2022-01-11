import createUser from '../../../src/domain/interactors/user/create-user';
import MockUserContract from '../utils/contracts/mock-user-contract';
import MockAuthContract from '../utils/contracts/mock-auth-contract';
import getMockUser from '../utils/entities/mock-user';

const mockUser = getMockUser({ email: 'test@test.com' });
const mockUserContract = new MockUserContract(mockUser);
const mockAuthContract = new MockAuthContract(mockUser);

describe('Create User', () => {
  it('The email is already registered', (done) => {
    const useCase = createUser(mockUserContract, mockAuthContract);
    useCase(mockUser).catch((err) => {
      expect(err.message).toEqual('The email is already registered');
      done();
    });
  });
  it('New user created successfully', (done) => {
    const useCase = createUser(mockUserContract, mockAuthContract);
    useCase({ ...mockUser, email: 'test2@test.com' }).then((value) => {
      expect(value.email).toEqual('test2@test.com');
      expect(value.name).toEqual(mockUser.name);
      expect(value.lastName).toEqual(mockUser.lastName);
      done();
    });
  });
});
