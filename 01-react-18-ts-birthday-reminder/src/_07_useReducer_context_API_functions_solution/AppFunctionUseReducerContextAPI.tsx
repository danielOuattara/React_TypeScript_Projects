import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}
