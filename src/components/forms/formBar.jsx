import dropDownIcon from '@svgs/arrowImage.svg';
import { useState } from 'react';

function FormBars({ fileName, title, isDraggable }) {
  const [isVisible, setIsVisible] = useState(false);
  const svgUrlString = dropDownIcon + '';

  // Input iconUrl Without the dirPath
  const svgUrlwithoutFile = svgUrlString.substring(
    0,
    svgUrlString.lastIndexOf('/') + 1,
  );

  function setVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div tabIndex={0} 
        onClick={setVisibility}
      
      className="formBars__button">
        <div className="formBars__iconContainer">
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
        </div>
        <div
          className={
            isVisible
              ? 'formBars__inputContainer--visible'
              : 'formBars__inputContainer'
          }
        >
          <div className="formBars__separator"></div>
        </div>
      </div>
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
