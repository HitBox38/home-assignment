import { useMutation } from "@tanstack/react-query";
import { Input } from "./ui/input";
import useSearchUsersStore from "@/stores/searchUsers";
import { User } from "@/interfaces/user";

interface Props {
  searchFn: (search: string) => Promise<User[]>;
}

export const SearchBar = ({ searchFn }: Props) => {
  const { search, setSearch, setData } = useSearchUsersStore();

  const { mutateAsync } = useMutation({
    mutationKey: ["search", search],
    mutationFn: (inline: string) => searchFn(inline),
    onSuccess: (newUsers) => {
      setData(newUsers);
    },
  });

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);

    if (e.key === "Enter") {
      mutateAsync(e.currentTarget.value);
      setSearch(e.currentTarget.value);
    }
  };

  return <Input placeholder="Search..." onKeyDown={onEnter} />;
};
