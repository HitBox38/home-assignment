import api from "@/api";
import { User } from "@/interfaces/user";

export const searchUsers = async (search: string) => {
  return api.post<User[]>("/users/search", { filter: search }).then((res) => res.data);
};
