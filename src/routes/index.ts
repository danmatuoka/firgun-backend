import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUser.controller";
import loginController from "../controllers/login.controller";
import updateUserController from "../controllers/updateUser.controller";
import { authUser } from "../middlewares/ensureAuth.middleware";
import isValidCpfOrCpnj from "../middlewares/isValidCpfOrCpnj.middleware";

const userRoutes = Router();

userRoutes.post("", isValidCpfOrCpnj, createUserController);
userRoutes.get("", authUser, getUsersController);
userRoutes.post("/login", loginController);
userRoutes.patch("/:id", authUser, updateUserController);

export default userRoutes;
