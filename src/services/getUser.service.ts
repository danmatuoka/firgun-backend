import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

interface IGetUserProps {
  id: number;
  is_adm: boolean;
}

const getUsersService = async ({ is_adm, id }: IGetUserProps) => {
  const userRepository = AppDataSource.getRepository(User);
  const allUsers = await userRepository.find();

  if (is_adm) {
    return allUsers;
  }

  return allUsers.find((user) => user.id === id);
};

export default getUsersService;
