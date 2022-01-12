import { AuthContract } from '../../contracts/auth-contracts';
import { User } from '../../entities/user';

type LoginAuth = Omit<User, 'password'> & { password?: string; token: string };

const loginAuth =
  (authContract: AuthContract) =>
  async (user: User): Promise<LoginAuth> => {
    // Crear token JWT
    const token = authContract.tokenGenerate({
      sub: user._id,
      iss: `${user.name} ${user.lastName}`,
      iat: new Date().getTime()
    });
    const newUser: LoginAuth = {
      ...user,
      token
    };
    delete newUser.password;
    // Retornarlo
    return newUser;
  };

export default loginAuth;
