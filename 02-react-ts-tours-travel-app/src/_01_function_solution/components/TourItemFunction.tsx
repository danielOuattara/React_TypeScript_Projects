import { useState } from "react";
import TourType from "./../types/TourType";

const TourItem = ({
  tour,
  removeTourItem,
}: {
  tour: TourType;
  removeTourItem: Function;
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={`${tour.name} description`} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {readMore ? tour.info : tour.info.substring(0, 100) + " ..."}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTourItem(tour.id)}>
          remove this tour
        </button>
      </footer>
    </article>
  );
};

export default TourItem;
