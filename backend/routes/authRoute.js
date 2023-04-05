import express from "express"
import {contactusController, registerController, userUpdateController} from "../controller/authController.js";
import {loginController,testController} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import vloginController from "../controller/vloginController.js";
import signinController from "../controller/signinController.js";

const router = express.Router()

router.post('/register',registerController)

router.post('/login',loginController)
router.post('/contactus',contactusController)


router.post('/update',userUpdateController)
router.post('/vsignin',signinController)
router.post('/vlogin',vloginController)





export default router