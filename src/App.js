import "./App.css";
import From from "./Components/Form";
import Loading from "./Components/Loading";
import Quiz from "./Components/Quiz";
import { useGlobalContext } from "./context";

function App() {
  const { loading, hasQuizStarted } = useGlobalContext();

  if (!hasQuizStarted) {
    return (
      <div className="container flex">{loading ? <Loading /> : <From />}</div>
    );
  }

  return (
    <div className="container flex">
      <Quiz />
    </div>
  );
}

export default App;
