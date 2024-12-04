import { useQuery } from "@tanstack/react-query";
import getUsers from "./api/getUsers";
import { useNavigate } from "react-router";
import { SearchBar } from "@/components/SearchBar";
import { searchUsers } from "./api/searchUsers";
import useSearchUsersStore from "@/stores/searchUsers";
import { UserTable } from "@/components/UserTable";

export const MainPage = () => {
  const { data: searchData, search } = useSearchUsersStore();
  const navigate = useNavigate();
  const { data } = useQuery({
    initialData: [],
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <>
      <SearchBar searchFn={searchUsers} />
      <UserTable
        data={search !== "" ? searchData : data}
        onRowClick={(id) => navigate(`/user/${id}`)}
      />
    </>
  );
};
