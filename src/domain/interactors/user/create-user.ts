import { UserContract } from '../../contracts/user-contracts';
import { User } from '../../entities/user';

const createUser =
  (userContract: UserContract) =>
  async (user: User): Promise<User> => {
    // Buscar por email
    // Validar que no exista el email
    const validUser = await userContract.findByEmail(user.email);
    if (!validUser) {
      throw new Error('The email is already registered');
    }
    // Cifrar password -- TODO
    // Crear el nuevo usuario
    const newUser = await userContract.create(user);
    // Retornarlo
    return newUser;
  };

export default createUser;
