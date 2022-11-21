import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user";

interface IUserUpdateProps extends IUserRequest {
  id: any;
}

const updateUserService = async ({
  id,
  name,
  surname,
  email,
  telephone,
  celphone,
  birth_date,
  cep,
  state,
  city,
  street,
  district,
  cpf_cnpj,
  meet_firgun,
  motive,
}: IUserUpdateProps) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (user!.is_adm === false) {
    throw new AppError("Forbidden", 403);
  }

  await userRepository.update(id, {
    name,
    surname,
    email,
    telephone,
    celphone,
    birth_date,
    cep,
    state,
    city,
    street,
    district,
    cpf_cnpj,
    meet_firgun,
    motive,
  });
  const userUpdated = userRepository.findOneBy({ id });
  return userUpdated;
};

export default updateUserService;
