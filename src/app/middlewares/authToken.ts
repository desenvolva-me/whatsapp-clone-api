import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "@config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");
  if (!(parts.length === 2))
    return res.status(401).send({ error: "Token errors" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token unformatted" });

  try {
    const tokenDecoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.headers.userId = String(tokenDecoded.id);

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Invalid Token" });
  }
};
