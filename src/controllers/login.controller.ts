import { Request, Response } from "express";
import loginService from "../services/login.service";

const loginController = async (req: Request, res: Response) => {
  const { cpf_cnpj } = req.body;
  const token = await loginService({ cpf_cnpj });
  return res.status(200).json({ token });
};

export default loginController;
