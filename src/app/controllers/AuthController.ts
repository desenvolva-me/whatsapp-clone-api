import { Request, Response } from "express";

import User from "@modelTypes/User";
import db from "@database/connection";
import generateToken from "@utils/generateToken";

class AuthController {
  async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const rawSelectedUsers: User[] = await db("User")
      .where("email", email)
      .select(["id"]);

    if (rawSelectedUsers.length > 0) {
      const selectedUsers: User[] = await db("User")
        .where("id", rawSelectedUsers[0].id)
        .where("password", password)
        .select(["id", "name", "avatar", "authorized"]);

      if (selectedUsers.length > 0) {
        const user: User = selectedUsers[0];
        const token = generateToken(String(user.id));

        return res.json({ user, token });
      } else {
        return res.status(401).json({ error: "A senha está incorreta!" });
      }
    } else {
      return res
        .status(401)
        .json({ error: "Este email não está cadastrado em nosso site!" });
    }
  }
}

export default new AuthController();
