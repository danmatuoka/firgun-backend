import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface ILogin {
  cpf_cnpj: any;
}

const loginService = async ({ cpf_cnpj }: ILogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ cpf_cnpj });
  if (!user) throw new AppError("Wrong cpf or cnpj.", 403);

  const token = jwt.sign(
    {
      isAdm: user.is_adm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id.toString(),
    }
  );

  return token;
};

export default loginService;
