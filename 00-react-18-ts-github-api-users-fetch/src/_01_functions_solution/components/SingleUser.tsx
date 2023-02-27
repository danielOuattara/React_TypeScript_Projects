import UserType from "./../types/UserType";
import { useState } from "react";
import { StateType } from "../composable/useFetchingSingleUser";

type PropsType = {
  fetchSingleUser: (usernameArg: string) => Promise<void>;
  singleState: StateType;
};

export default function SingleUser(props: PropsType) {
  const [userName, setUserName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!userName) return;
    props.fetchSingleUser(userName);
    setUserName("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3>fetch single user infos</h3>
        <div
          className="form-control"
          //   style={{ "grid-template-columns": "150px 1fr" }}
        >
          <label htmlFor="username">Github username :</label>
          <input
            className=""
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={handleChange}
          />
        </div>
        <p>examples: danielOuattara, quincyLarson, ...</p>
        <button className="btn" type="submit">
          fetch
        </button>
      </form>

      {/* <h3 v-if="Object.entries(singleUserData).length != 0">User infos :</h3> */}
      {/* <h2 v-if="!singleUserLoading && !singleUserError">User infos :</h2> */}

      <h2>User infos :</h2>
      <ul>
        {Object.entries(props.singleState.singleUserData).map((subArray) => {
          const [key, value] = subArray;
          return (
            <li
              style={{ textAlign: "left", margin: "10px 0 10px 10px" }}
              key={key}
            >
              {" "}
              <b>{key}</b> : {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}
