
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

export default BarData