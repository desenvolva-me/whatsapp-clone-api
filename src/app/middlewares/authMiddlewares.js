import { celebrate, Joi, Segments } from "celebrate";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "@config/auth";

class AuthMiddlewares {
  authenticate = celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  });

  async authToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).send({ error: "No token provided" });

    const parts = authHeader.split(" ");
    if (!(parts.length === 2))
      return res.status(401).send({ error: "Token errors" });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).send({ error: "Token unformatted" });

    try {
      const tokenDecoded = await promisify(jwt.verify)(
        token,
        authConfig.secret,
      );

      req.headers.userId = String(tokenDecoded.id);

      return next();
    } catch (err) {
      return res.status(401).send({ error: "Invalid Token" });
    }
  }
}
export default new AuthMiddlewares();
