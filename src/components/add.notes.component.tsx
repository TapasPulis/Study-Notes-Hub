const AddNotes = () => {
  return (
    <div>
      <form>
        <label htmlFor="subject">Subject: </label>
        <input type="text" name="subject" id="subject" />
        <br />
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="content">Content: </label>
        <input type="text" name="content" id="content" />
        <br />
        <label htmlFor="difficulty">Difficulty: </label>
        <input type="text" name="difficulty" id="difficulty" />
        <br />
        <input type="submit" value="Add Notes" />
      </form>
    </div>
  );
};

export default AddNotes;
