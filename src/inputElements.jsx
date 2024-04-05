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
    workExperienceElements: [{}],
  };
  return formsElements;
}

export default returnFormsInputElements;
