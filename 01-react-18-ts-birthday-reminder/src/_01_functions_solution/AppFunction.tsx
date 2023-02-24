import { useState } from "react";
import data from "../data";
import List from "./ListFunction";
import PersonType from "./types/PersonType";

function App() {
  const [people, setPeople] = useState<PersonType[]>(data);

  const handleEmpty = () => {
    setPeople(() => []);
  };

  const handleRefresh = () => {
    setPeople(() => data);
  };

  const handleRemoveOnePerson = (id: string) => {
    setPeople(() => people.filter((person) => person.id !== id));
  };

  return (
    <main>
      <section className="container">
        <span> typescript + functional component</span>
        {people.length > 1 && <h3>{people.length} birthdays today</h3>}
        {(people.length === 1 || people.length === 0) && (
          <h3>{people.length} birthday today</h3>
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

export default App;
