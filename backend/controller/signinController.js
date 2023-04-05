import { hashPassword } from "../helper/authHelper.js";
import signInModel from "../models/signInModel.js";

const signinController = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;

    if (!name) {
      return res.send({
        message: "name is req",
        success: false,
      });
    }
    if (!email) {
      return res.send({
        message: "email is req",
        success: false,
      });
    }
    if (!password) {
      return res.send({
        message: "password is req",
        success: false,
      });
        
    }
    if (!cpassword) {
      return res.send({
        message: "confirm password is req",
        success: false,
      });
    }

    const user = await signInModel.findOne({
      email,
    });

    if (user) {
      res.send({
        success: true,
        message: "Already Register",
      });
    } else {
      console.log("before hash");
      const hpass = await hashPassword(password);
      const ins = await signInModel.insertMany({
        name,
        email,
        password: hpass,
      });
      console.log("after insert in DB");

      res.send({
        success: true,
        message: "Sign In successfully",
      });
    }
  } catch (error) {
    if (error.name === "MongoError") {
      res.status(400).send({
        success: false,
        message: "Unique name req",
        error,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "error in sign in",
        error,
      });
    }
  }
};
export default signinController;
