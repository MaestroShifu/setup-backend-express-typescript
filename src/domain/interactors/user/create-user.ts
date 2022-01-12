import { UserContract } from '../../contracts/user-contracts';
import { AuthContract } from '../../contracts/auth-contracts';
import { User } from '../../entities/user';

const createUser =
  (userContract: UserContract, authContract: AuthContract) =>
  async (user: Omit<User, '_id'>): Promise<User> => {
    // Buscar por email / Validar que no exista el email
    const validUser = await userContract.findByEmail(user.email);
    if (validUser) {
      throw new Error('The email is already registered');
    }
    // Cifrar password
    const password = authContract.passwordEncrypt(user.password);
    // Crear el nuevo usuario
    const newUser = await userContract.create({ ...user, password });
    // Retornarlo
    return newUser;
  };

export default createUser;
