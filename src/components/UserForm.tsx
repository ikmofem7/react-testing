import { useState } from "react";

type Props = {
  onAddUser: (payload: { name: string | null; email: string | null }) => void;
};

const UserForm = (props: Props) => {
  const [formState, setFormState] = useState<{
    name: string | null;
    email: string | null;
  }>({
    name: null,
    email: null,
  });
  const { onAddUser } = props;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, name: value });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, email: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddUser(formState);
        setFormState({
          name: null,
          email: null,
        });
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={formState.name ?? ""}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={formState.email ?? ""}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export { UserForm };
