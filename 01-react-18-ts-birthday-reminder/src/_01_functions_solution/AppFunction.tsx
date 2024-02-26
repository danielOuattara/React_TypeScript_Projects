import { useState } from "react";
import data from "../data";
import List from "./ListFunction";

export default function App() {
  const [people, setPeople] = useState<TypePerson[]>(data);

  const handleEmpty = () => {
    setPeople(() => []);
  };

  const handleRefresh = () => {
    setPeople(() => data);
  };

  const handleRemoveOnePerson = (id: string) => {
    setPeople(() => people.filter((person) => person.id !== id));
  };

  const quantity = people.length > 1 ? "birthdays" : "birthday";

  return (
    <main>
      <section className="container">
        <span> typescript + functional component</span>

        {people.length >= 0 && (
          <h3>
            {people.length} {quantity} today
          </h3>
        )}

        <List people={people} handleRemoveOnePerson={handleRemoveOnePerson} />

        {people.length !== 0 && (
          <button onClick={handleEmpty}> clear all</button>
        )}

        {people.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}
