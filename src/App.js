import "./App.css";
import From from "./Components/Form";
import Loading from "./Components/Loading";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { useGlobalContext } from "./context";

function App() {
  const { loading, hasQuizStarted, showResult } = useGlobalContext();

  if (!hasQuizStarted) {
    return (
      <div className="container flex">{loading ? <Loading /> : <From />}</div>
    );
  }

  if (showResult) {
    return <Result />;
  }

  return (
    <div className="container flex">
      <Quiz />
    </div>
  );
}

export default App;
