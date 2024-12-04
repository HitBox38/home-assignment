import api from "@/api";
import { User } from "@/interfaces/user";

const getUsers = async () => api.get<User[]>("/users").then((res) => res.data);

export default getUsers;
