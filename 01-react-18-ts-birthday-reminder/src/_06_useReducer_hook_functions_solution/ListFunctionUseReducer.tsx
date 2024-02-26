type TypeProps = {
  dispatchFriends: React.Dispatch<TypeFriendsAction>;
  friendsState: TypeFriendsState;
};

export default function ListFunctionUseReducer({
  dispatchFriends,
  friendsState,
}: TypeProps) {
  const handleRemoveOnePerson = (id: string) => {
    dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
  };

  const target = friendsState.length > 1 ? `friends` : `friend`;
  return (
    <>
      {friendsState.length > 0 && (
        <h2 className="h2_styled">{target} to contact</h2>
      )}

      {friendsState.map((person) => {
        return (
          <article key={person.id} className="person article_styled">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <button
                className="btn_styled"
                onClick={() => handleRemoveOnePerson(person.id)}
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
