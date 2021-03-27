const From = () => {
  return (
    <form className="form">
      <div className="form-control flex">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="">Linux</option>
          <option value="">DevOps</option>
          <option value="">Networking</option>
          <option value="">Programming (PHP, JS, Pythong and etc.)</option>
          <option value="">Cloud</option>
          <option value="">Docker</option>
          <option value="">Kubernetes</option>
        </select>
      </div>
      <div className="form-control flex">
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty">
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>
      </div>

      <div className="form-control flex">
        <label htmlFor="limit">Questions</label>
        <input type="number" id="limit" />
      </div>
      <button type="submit" className="sbm_btn">
        Let's Go
      </button>
    </form>
  );
};
export default From;
