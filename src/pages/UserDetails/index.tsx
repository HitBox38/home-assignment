import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import getUserById from "./api/getUserById";
import { User } from "@/interfaces/user";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => getUserById(id ?? ""),
  });

  return (
    <Card>
      {isLoading ? (
        <Skeleton className="w-[242.61px] h-[222px] " />
      ) : (
        <>
          <CardHeader>
            <CardTitle>{data?.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <p>ID: {data?.id}</p>
            <p>Email: {data?.email}</p>
            <p>Age: {data?.age}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate("/")}>Go Back</Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};
