import TourItemFunction from "./TourItemFunction";
import TourType from "./../types/TourType";

const Tours = ({
  tours,
  removeTourItem,
}: {
  tours: TourType[];
  removeTourItem: Function;
}) => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <h3>function component</h3>
          <div className="underline"></div>
          <div>
            {tours.map((item) => (
              <TourItemFunction
                key={item.id}
                tour={item}
                removeTourItem={removeTourItem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tours;
