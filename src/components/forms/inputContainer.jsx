import FormBars, { CVBar } from './formBar';

function InputContainer() {
  const formInputElements = returnFormsInputElements();
  return (
    <>
      <section className="inputContainer">
        <CVBar></CVBar>
        <FormBars
          fileName={'personalImage.svg'}
          title="Personal Image"
          isDraggable={false}
          inputElements={formInputElements.personalInfoElements}
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

function returnFormsInputElements() {
  const formsElements = {
    personalInfoElements: [
      {
        title: 'Full Name',
        type: 'textField',
        placeholder: 'John Doe',
      },
      {
        title: 'Job Title',
        type: 'textField',
        placeholder: 'Senior Software Engineer',
      },
      {
        title: 'Email',
        type: 'textField',
        placeholder: 'johndoe@gmail.com',
      },
      {
        title: 'Address',
        type: 'textField',
        placeholder: 'Tokyo, Japan',
      },
      {
        title: 'Phone Number',
        type: 'textField',
        placeholder: '937 200 020',
      },
      {
        title: 'Website',
        type: 'textField',
        placeholder: 'www.linkedin.sample.com',
      },
      {
        title: 'Summary',
        type: 'textArea',
        placeholder: 'As a Software Engineer  I...',
      },
    ],
  };
  return formsElements;
}

export default InputContainer;
