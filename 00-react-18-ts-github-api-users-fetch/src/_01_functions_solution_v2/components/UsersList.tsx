import UserListItem from "./UserListItem";
import UserType from "./../types/UserType";

export default function UsersList(props: { users: UserType[] }) {
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
