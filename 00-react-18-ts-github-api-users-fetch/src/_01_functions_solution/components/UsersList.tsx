import UserListItem from "./UserListItem";
import UserType from "./../types/UserType";

type PropType = {
  fetchSingleUser: (usernameArg: string) => Promise<void>;
  users: UserType[];
};

export default function UsersList(props: {
  fetchSingleUser: PropType["fetchSingleUser"];
  users: PropType["users"];
}) {
  return (
    <>
      <h3>fetch 30 users data</h3>
      <ul className="users">
        {props.users.map((person: UserType) => (
          <UserListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
