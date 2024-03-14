import dropDownIcon from '@svgs/arrowImage.svg';

function FormBars({ fileName, title, isDraggable }) {
  const svgUrlString = dropDownIcon + '';

  // Input iconUrl Without the dirPath
  const svgUrlwithoutFile = svgUrlString.substring(
    0,
    svgUrlString.lastIndexOf('/') + 1,
  );

  return (
    <>
      <button className="formBars__button">
        {isDraggable ? (
          <>
            <img
              alt="draggable icon"
              className="formBars__draggableImage"
              src={svgUrlwithoutFile + 'draggableImage.svg'}
            ></img>
            <img
              alt={title + 'image'}
              className="formBars__image"
              src={svgUrlwithoutFile + fileName}
            ></img>
          </>
        ) : (
          <img
            alt={title + 'image'}
            className="formBars__image"
            src={svgUrlwithoutFile + fileName}
          ></img>
        )}

        <span className="formBars__title">{title}</span>
        <img
          alt="dropDownIcon"
          className="formBars__dropDownIcon"
          src={dropDownIcon}
        ></img>
      </button>
    </>
  );
}

function CVBar() {
  return (
    <header className="cvBar">
      <h1 className="cvBar__Title">CV Generator</h1>
      <button className="cvBar__autoFillButton">
        <span></span>Autofill
      </button>
      <button className="cvBar__saveButton">
        <span></span>Save
      </button>
    </header>
  );
}

export default FormBars;
export { CVBar };
