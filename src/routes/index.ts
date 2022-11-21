import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUser.controller";
import isValidCpfOrCpnj from "../middlewares/isValidCpfOrCpnj.middleware";

const userRoutes = Router();

userRoutes.post("", isValidCpfOrCpnj, createUserController);
userRoutes.get("", getUsersController);

export default userRoutes;
