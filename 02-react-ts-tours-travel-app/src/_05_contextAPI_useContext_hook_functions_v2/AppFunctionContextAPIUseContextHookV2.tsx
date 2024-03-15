import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionContextAPIUseContextHookV2() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
