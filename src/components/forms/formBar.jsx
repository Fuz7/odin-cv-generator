function FormBars() {}

function CVBar() {
  return (
    <>
      <header className="cvBar">
        <h1 className="cvBar__Title">CV Generator</h1>
        <button className="cvBar__autoFillButton">
          <span></span>Autofill
        </button>
        <button className="cvBar__saveButton">
          <span></span>Save
        </button>
      </header>
    </>
  );
}

export default FormBars;
export { CVBar };
