import TourItemFunction from "./TourItemFunction";

type TypeTours = {
  tours: ITour[];
  removeTourItem: (id: string) => void;
};

const Tours = ({ tours, removeTourItem }: TypeTours) => {
  return (
    <main>
      <section>
        <div className="title">
          <p>functions + custom hook solution</p>
          <h2>our tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map((item) => (
              <TourItemFunction
                key={item.id}
                item={item}
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
