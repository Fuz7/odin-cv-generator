import FormBars, { CVBar } from './formBar';

function InputContainer() {
  return (
    <>
      <section className="inputContainer">
        <CVBar></CVBar>
        <FormBars
          iconUrl={'personalImage.svg'}
          title="Personal Image"
          isDraggable={true}
        ></FormBars>
      </section>
    </>
  );
}

export default InputContainer;
