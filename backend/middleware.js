import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./utils/utils.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      // check if token is expired
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        res
          .status(401)
          .json({ message: "Token expired", tokenStatus: "expired" });
      } else {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
      }
    } catch (err) {
      res.status(401).json({ message: err });
    }
  } else {
    res.status(401).json({ message: "Invalid token, login again" });
  }
};
