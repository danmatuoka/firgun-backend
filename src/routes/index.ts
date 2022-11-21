import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import isValidCpfOrCpnj from "../middlewares/isValidCpfOrCpnj.middleware";

const userRoutes = Router();

userRoutes.post("", isValidCpfOrCpnj, createUserController);

export default userRoutes;
