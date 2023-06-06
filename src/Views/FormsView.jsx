import { useState } from 'react';
import {
  ForgotPWComponent,
  LoginComponent,
  RegisterComponent,
} from '../Components';
import { ButtonComponent } from '../Common';

const FormView = () => {
  const [toggleView, setToggleView] = useState(true);
  const [toggleForgotPW, setToggleForgotPW] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      {toggleForgotPW ? (
        <ForgotPWComponent />
      ) : (
        <>
          {toggleView ? <LoginComponent /> : <RegisterComponent />}
          <span style={{ marginLeft: '1em', float: 'left' }}>
            <ButtonComponent
              id="showRegisterForm"
              type="button"
              text={toggleView ? 'register?' : 'login?'}
              variant="light"
              disabled={false}
              onClick={() => setToggleView((prev) => !prev)}
            />
          </span>
        </>
      )}
      <span style={{ marginRight: '1em', float: 'right' }}>
        <ButtonComponent
          id="showForgotPWForm"
          type="button"
          text={toggleForgotPW ? 'Back to login?' : 'Forgot Password?'}
          variant="light"
          disabled={false}
          onClick={() => setToggleForgotPW((prev) => !prev)}
        />
      </span>
    </div>
  );
};

export default FormView;
