import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
import signInModel from "../models/signInModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_TOKEN);
    console.log(document.cookie,"Cookieee")
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticate = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("before user");
    const user = await signInModel.findOne({ email });
    console.log("after user");
    const token = JWT.sign({ _id: user._id }, process.env.JWT_TOKEN);
    console.log("after token");
    const upd = await signInModel.updateOne(
      { email},
      { $set: { tokens: token } }
    );
    console.log("after update");
    next();
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "error in isAuthenticate middleware",
    });
  }
};

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.loginToken;

    const user = await signInModel.findOne({ tokens: token });
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

    
    export const isAdmin = async (req, res, next) => {
      try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await userModel.findOne({ email });
        console.log(user);
    
        if (user.role === 1) {
          return res.status(401).send({
            success: true,
            message: "User is Admin",
          });
          next();
        } else {
          res.status(404).send({
            success: false,
            message: "pata nahi",
          });
        }
      } catch (error) {
        res.status(401).send({
          error,
          success: false,
          message: "Error in admin Middleware",
        });
      }
    };