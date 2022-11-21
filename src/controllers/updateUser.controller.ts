import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
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
  } = req.body;

  const userDataUpdated = await updateUserService({
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
  });

  return res.status(200).json(userDataUpdated);
};

export default updateUserController;
