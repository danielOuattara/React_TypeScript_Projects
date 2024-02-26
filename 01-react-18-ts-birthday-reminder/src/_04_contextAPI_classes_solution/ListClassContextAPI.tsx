import { FriendsContext } from "./contextClass/FriendsContext";

export default function ListContextAPI() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const people = context?.people || [];
        const handleRemoveOnePerson =
          context?.handleRemoveOnePerson || (() => {});
        return (
          <>
            {people.length > 1 && (
              <h2 className="h2_styled">friends to contact</h2>
            )}
            {people.length === 1 && (
              <h2 className="h2_styled">friend to contact</h2>
            )}
            {people.map((person) => {
              const { id, name, age, image } = person;
              return (
                <article key={id} className="person article_styled">
                  <img src={image} alt={"picture of " + name} />
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
      }}
    </FriendsContext.Consumer>
  );
}
