import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { authUser } from "../controllers/userController.js";
import router from "./productRoutes.js";

router.post("/login", authUser);

export default router;
