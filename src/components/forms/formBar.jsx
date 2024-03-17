import dropDownIcon from '@svgs/arrowImage.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

function FormBars({ fileName, title, isDraggable, inputElements }) {
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
      <div tabIndex={0} className="formBars__button">
        <div onClick={setVisibility} className="formBars__iconContainer">
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
              ? 'formBars__columnContainer--visible'
              : 'formBars__columnContainer'
          }
        >
          <div className="formBars__separator"></div>
          {isDraggable ? (
            false
          ) : (
            <BarData inputElements={inputElements}></BarData>
          )}
        </div>
      </div>
    </>
  );
}

FormBars.propTypes = {
  fileName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDraggable: PropTypes.bool.isRequired,
  inputElements: PropTypes.array,
};
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

function BarData({ inputElements }) {
  // To Check For personal data
  if (inputElements !== undefined && inputElements[0]['id'] === undefined) {
    return (
      <>
        <div className="columnContainer__inputContainer">
          {inputElements.map((elementInfo, index) => {
            return (
              <div
                className="inputContainer__inputAndLabelContainer"
                key={index}
              >
                <label
                  className="inputContainer__label"
                  htmlFor={elementInfo.title + index}
                >
                  {elementInfo.title}
                </label>
                {elementInfo.type === 'textField' ? (
                  <input
                    className="inputContainer__textField"
                    id={elementInfo.title + index}
                    placeholder={elementInfo.placeholder}
                  ></input>
                ) : (
                  false
                )}
                {elementInfo.type === 'textArea' ? (
                  <textarea
                    className="inputContainer__textArea"
                    id={elementInfo.title + index}
                    cols="44"
                    rows="2"
                    placeholder={elementInfo.placeholder}
                  ></textarea>
                ) : (
                  false
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (inputElements !== undefined) {
    return;
  }
  return;
}

export default FormBars;
export { CVBar };
