import { FC } from "react";

const UserList: FC<{ users: any }> = ({ users }) => {
  const renderedUsers = users.map((user) => (
    <tr key={user.name} id={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
};

export { UserList };
