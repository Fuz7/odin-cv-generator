// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { WorkExperienceContext } from './context';
import './main.scss';
import InputContainer from './components/forms/inputContainer';
import OutputContainer from './components/outputs/outputContainer';

function App() {
  return (
    <>
      <WorkExperienceContext.Provider>
        <InputContainer></InputContainer>
        <OutputContainer></OutputContainer>
      </WorkExperienceContext.Provider>
    </>
  );
}

export default App;
