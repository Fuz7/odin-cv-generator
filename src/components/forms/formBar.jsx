import dropDownIcon from '@svgs/arrowImage.svg';

function FormBars({ iconUrl, title, isDraggable }) {
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
              alt="Dragable Button"
              className="formBars__draggableImage"
              src={svgUrlwithoutFile + 'draggableImage.svg'}
            ></img>
            <img
              alt={title + 'image'}
              className="formBars__image"
              src={svgUrlwithoutFile + iconUrl}
            ></img>
          </>
        ) : (
          <img
            alt={title + 'image'}
            className="formBars__image"
            src={svgUrlwithoutFile + iconUrl}
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
