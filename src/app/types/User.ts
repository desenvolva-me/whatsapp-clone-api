export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  authorized: boolean;
  created_at: Date;
}
