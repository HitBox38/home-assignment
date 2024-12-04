import api from "@/api";
import { User } from "@/interfaces/user";

const getUserById = (id: string) => api.get<User>(`users/${id}`).then((res) => res.data);

export default getUserById;
