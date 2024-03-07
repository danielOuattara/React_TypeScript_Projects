import { ToursContext } from "../context/ToursContext";
import TourItemFunction from "./TourItem";

export default function Tours() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        const tours = context?.tours || [];
        return (
          <main>
            <section>
              <div className="title">
                <p>context API + functions solution version 2</p>
                <h2>our tours</h2>
                <div className="underline"></div>
                <div>
                  {tours.map((item) => {
                    return <TourItemFunction key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </section>
          </main>
        );
      }}
    </ToursContext.Consumer>
  );
}
