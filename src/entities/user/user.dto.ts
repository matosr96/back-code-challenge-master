import { User } from "./models";

export type createUserDto = Omit<User, "user_id" | "id">;
export type partialUserDto = Partial<User>;
