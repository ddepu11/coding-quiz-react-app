import { useGlobalContext } from "../context";

const From = () => {
  const {
    handleInput,
    questions,
    difficulty,
    category,
    handleSubmit,
  } = useGlobalContext();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control flex">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleInput}
        >
          <option value="Linux">Linux</option>
          <option value="DevOps">DevOps</option>
          <option value="Networking">Networking</option>
          <option value="JAVA">JAVA</option>
          <option value="C++">C++</option>
          <option value="JS">JS</option>
          <option value="C">C</option>
          <option value="PHP">PHP</option>
          <option value="C#">C#</option>
          <option value="PYTHON">PYTHON</option>
          <option value="GO">GO</option>
          <option value="RUBY">RUBY</option>
          <option value="Cloud">Cloud</option>
          <option value="Docker">Docker</option>
          <option value="Kubernetes">Kubernetes</option>
        </select>
      </div>
      <div className="form-control flex">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={handleInput}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="form-control flex">
        <label htmlFor="questions">Questions</label>
        <input
          name="questions"
          type="number"
          id="questions"
          value={questions}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="sbm_btn">
        Let's Go
      </button>
    </form>
  );
};
export default From;
