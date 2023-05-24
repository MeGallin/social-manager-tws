import { useState } from 'react';
import { LoginComponent, RegisterComponent } from '../Components';
import { ButtonComponent } from '../Common';

const formsView = () => {
  const [toggleView, setToggleView] = useState(true);
  return (
    <div style={{ width: '100%' }}>
      <div>{toggleView ? <LoginComponent /> : <RegisterComponent />}</div>
      <div>
        <ButtonComponent
          id="showRegisterForm"
          type="button"
          text={toggleView ? 'register?' : 'login?'}
          variant="dark"
          disabled={false}
          onClick={() => setToggleView((prev) => (prev = !prev))}
        />
      </div>
    </div>
  );
};

export default formsView;
