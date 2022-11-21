import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import isValidCpfOrCpnj from "../middlewares/isValidCpfOrCpnj.middleware";

const userRoutes = Router();

userRoutes.post("", isValidCpfOrCpnj, createUserController);
userRoutes.get("", getUsersController);
userRoutes.patch("/:id", updateUserController);

export default userRoutes;
