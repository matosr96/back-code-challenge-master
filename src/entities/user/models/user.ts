export interface User {
  user_id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  phone: string;
  status: string;
}

export type CreateUserDTO = Omit<User, "user_id">;
export type PartialUser = Partial<User>;
