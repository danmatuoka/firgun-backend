import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user";

const createUserService = async ({
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
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const cpfAlreadyExists = await userRepository.findOneBy({ cpf_cnpj });

  if (cpfAlreadyExists) {
    throw new AppError("CPF ou CNPJ already exists", 400);
  }

  const user = userRepository.create({
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

  await userRepository.save(user);

  return user;
};

export default createUserService;
