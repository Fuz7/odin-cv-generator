import FormBars, { CVBar } from './formBar';

function InputContainer() {
  return (
    <>
      <section className="inputContainer">
        <CVBar></CVBar>
        <FormBars
          fileName={'personalImage.svg'}
          title="Personal Image"
          isDraggable={false}
        ></FormBars>
        <FormBars
          fileName={'workImage.svg'}
          title="Work Experience"
          isDraggable={true}
        ></FormBars>
        <FormBars
          fileName={'educationImage.svg'}
          title="Educational Experience"
          isDraggable={true}
        ></FormBars>
        <FormBars
          fileName={'projectsImage.svg'}
          title="Projects"
          isDraggable={true}
        ></FormBars>
      </section>
    </>
  );
}

export default InputContainer;
