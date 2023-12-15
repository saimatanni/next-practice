import Link from "next/link";
import GetUser from "../../../service/getUsers";
export default async function userList() {
//   const getUserlist = GetUser();
  const users = await GetUser();
  return (
    <div>
      <h1>Usser list</h1>
      {users.map((item) => (
        <h3 key={item.id}>
          <Link href={`/users/${item.id}`}>{item.name}</Link>
        </h3>
      ))}
    </div>
  );
}
