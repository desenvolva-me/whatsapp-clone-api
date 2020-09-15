import { Request, Response } from "express";
import db from "@database/connection";
import User from "@modelTypes/User";
import generateToken from "@utils/generateToken";
class UserController {
  async create(req: Request, res: Response) {
    const { ...userData } = req.body;

    try {
      const insertedUsers: User[] = await db("User")
        .insert(userData)
        .returning(["id", "name", "email", "authorized", "avatar"]);

      const user: User = insertedUsers[0];
      const token = generateToken(String(user.id));

      return res.json({ user, token });
    } catch {
      return res.status(401).json({ error: "Este email já está cadastrado!" });
    }
  }
}

export default new UserController();
