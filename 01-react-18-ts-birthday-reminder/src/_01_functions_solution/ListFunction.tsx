export default function ListFunction({
  people,
  handleRemoveOnePerson,
}: TypeListProps) {
  const target = people.length > 1 ? `friends` : `friend`;

  return (
    <>
      {people.length > 0 && <h2 className="h2_styled">{target} to contact</h2>}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person article_styled">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                onClick={() => handleRemoveOnePerson(id)}
                className="btn_styled"
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
