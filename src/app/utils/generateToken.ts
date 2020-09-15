import jwt from "jsonwebtoken";
import authConfig from "@config/auth";

const generateToken = (id: string) => {
  return jwt.sign({ id }, authConfig.secret);
};

export default generateToken;
