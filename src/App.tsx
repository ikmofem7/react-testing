import { useState } from "react";
import { UserForm, UserList } from "./components";

export default function App() {
  const [user, setUser] = useState<any[]>([]);
  const onAddUser = (user: any) => {
    setUser((prev) => [...prev, user]);
  };
  return (
    <div className="container mx-auto">
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={user} onAddUser={onAddUser} />
    </div>
  );
}
