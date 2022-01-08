import createUser from '../../../src/domain/interactors/user/create-user';
import MockUserContract from '../utils/contracts/mock-user-contract';
import getMockUser from '../utils/entities/mock-user';

const mockUser = getMockUser({ email: 'test@test.com' });
const mockUserContract = new MockUserContract(mockUser);

describe('Create User', () => {
  it('The email is already registered', (done) => {
    const useCase = createUser(mockUserContract);
    useCase(mockUser).catch((err) => {
      expect(err.message).toEqual('The email is already registered');
      done();
    });
  });
  it('New user created successfully', (done) => {
    const useCase = createUser(mockUserContract);
    useCase({ ...mockUser, email: 'test2@test.com' }).then((value) => {
      expect(value.email).toEqual('test2@test.com');
      expect(value.name).toEqual(mockUser.name);
      expect(value.lastName).toEqual(mockUser.lastName);
      done();
    });
  });
});
