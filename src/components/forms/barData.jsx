function BarData({ inputElements }) {
  // To Check For personal data
  const hasData = true;
  if (inputElements.length > 0 && !inputElements[0]?.id) {
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
  } else {
    console.log('sa');
    return (
      <>
        {hasData ? (
          <>
            <div className="barData__separator"></div>
            <button className="barData__addData">{'+ Data'}</button>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default BarData;
