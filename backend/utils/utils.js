import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const JWT_SECRET = "thisisasecret";

export const hashPass = async(pass) => {
  const hashedPass = await bcrypt.hash(pass, 10);
  return hashedPass;
};

export const comparePass = async (pass, hashedPass) => {
  return await bcrypt.compareSync(pass, hashedPass);
};

export const signJWT = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

