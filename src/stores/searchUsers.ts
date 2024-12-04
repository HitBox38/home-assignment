import { User } from "@/interfaces/user";
import { create } from "zustand";

interface SearchUsersStore {
  search: string;
  setSearch: (search: string) => void;
  data: User[];
  setData: (newUsers: User[]) => void;
}

const useSearchUsersStore = create<SearchUsersStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  data: [],
  setData: (newUsers) => set({ data: newUsers }),
}));

export default useSearchUsersStore;
