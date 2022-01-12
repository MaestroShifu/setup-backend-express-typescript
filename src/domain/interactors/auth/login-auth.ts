import { AuthContract } from '../../contracts/auth-contracts';
import { User, LoginAuth } from '../../entities/user';

const loginAuth =
  (authContract: AuthContract) =>
  async (user: Omit<User, 'password'>): Promise<LoginAuth> => {
    // Crear token JWT
    const token = authContract.tokenGenerate({
      sub: user._id,
      iss: `${user.name} ${user.lastName}`,
      iat: new Date().getTime()
    });
    const newUser = {
      ...user,
      token
    };
    // Retornarlo
    return newUser;
  };

export default loginAuth;
