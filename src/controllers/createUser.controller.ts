import { Request, Response } from "express";
import createUserService from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = await createUserService(user);

  return res.status(201).json(newUser);
};

export default createUserController;
