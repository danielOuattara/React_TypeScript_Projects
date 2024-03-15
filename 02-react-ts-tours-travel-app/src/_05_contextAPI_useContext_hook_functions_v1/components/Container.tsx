import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { useToursContext } from "../context/ToursContext";

function Container() {
  // Use optional chaining to safely access context properties
  const context = useToursContext();
  const isError = context?.isError || false;
  const isLoading = context?.isLoading || false;
  const tours = context?.tours || [];

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <ResetTours />;
  }

  return <Tours />;
}

export default Container;
