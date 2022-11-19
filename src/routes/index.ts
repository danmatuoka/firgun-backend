import { Router } from "express";
import createUserController from "../controllers/createUser.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);

export default userRoutes;
