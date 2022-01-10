import { User } from '../../../../src/domain/entities/user';

const getMockUser = (user: Partial<User>) => {
  const userMock: User = {
    id: 'asdasd',
    email: 'test@test.com',
    name: 'User test',
    lastName: 'User test',
    phone: '1234567',
    language: 'es',
    password: 'prueba_prueba'
  };
  return { ...userMock, ...user };
};

export default getMockUser;
