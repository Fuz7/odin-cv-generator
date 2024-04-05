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
    educationElements: [
      {
        title: 'School Name',
        type: 'textField',
        placeholder: 'University Of Mindanao',
      },
      {
        title: 'Course',
        type: 'textField',
        placeholder: 'Bachelor Of Science In Com Shop',
      },
      { title: 'Start Date', type: 'dateField', placeholder: 'Oct 10, 2023' },
      { title: 'Address', type: 'textField', placeholder: 'Tokyo, Japan' },
      { title: 'Ongoing', type: 'booleanField', placeholder: false },
      { title: 'End Date', type: 'dateField', placeholder: 'Nov 12, 2023' },
    ],
  };
  return formsElements;
}

export default returnFormsInputElements;
