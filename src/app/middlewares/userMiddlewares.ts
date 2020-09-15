import { celebrate, Joi, Segments } from "celebrate";

class userMiddlewares {
  create = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      avatar: Joi.string(),
    }),
  });
}

export default new userMiddlewares();
