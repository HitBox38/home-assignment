import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { User } from "@/interfaces/user";

interface Props {
  data: User[];
  onRowClick: (id: string | number) => void;
}

export const UserTable = ({ data, onRowClick }: Props) => {
  return (
    <Table className="w-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-96">ID</TableHead>
          <TableHead className="w-96">Name</TableHead>
          <TableHead className="w-96">Email</TableHead>
          <TableHead className="w-96">Age</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id} onClick={() => onRowClick(user.id)} className="cursor-pointer">
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
