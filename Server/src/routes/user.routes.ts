import { Router } from "express";
import { Register, Login, User1 } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/user1").get(User1);

export default router;
