import { Request, Response } from "express";
import { isJSDocAugmentsTag } from "typescript";
import getUsersService from "../services/getUser.service";

const getUsersController = async (req: Request, res: Response) => {
  const { is_adm, id } = req.body;

  const users = await getUsersService({ is_adm, id });

  return res.status(200).json(users);
};

export default getUsersController;
