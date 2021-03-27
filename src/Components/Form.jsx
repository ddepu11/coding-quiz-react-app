const From = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" />
      </div>
      <div className="form-control">
        <label htmlFor="difficulty">Difficulty</label>
        <input type="text" id="difficulty" />
      </div>

      <div className="form-control">
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" />
      </div>
      <div className="form-control">
        <label htmlFor="limit">Limit</label>
        <input type="text" id="limit" />
      </div>
      <button type="submit" className="sbm_btn">
        Submit
      </button>
    </form>
  );
};
export default From;
