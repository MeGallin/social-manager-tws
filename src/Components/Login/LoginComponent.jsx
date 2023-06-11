import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailRegEx, passwordRegEx } from '../../Utils/regEx';
import { InputComponent, ButtonComponent } from '../../Common';
import { loginAction } from '../../Store/authReducer';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const userLoginInfo = useSelector((state) => state.userLoginInfo);
  const { loading, error, success } = userLoginInfo;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleOnchange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {!loading ? (
        <fieldset className="fieldSet">
          <legend>Login Form</legend>
          {error ? error : null}
          {success ? 'Success Message' : null}
          <form onSubmit={handleLoginSubmit}>
            <InputComponent
              id="email"
              label="email"
              type="email"
              name="email"
              value={email}
              className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
              onChange={handleOnchange}
            />
            <InputComponent
              id="password"
              label="password"
              type="password"
              name="password"
              value={password}
              required
              className={!passwordRegEx.test(password) ? 'invalid' : 'entered'}
              onChange={handleOnchange}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ButtonComponent
                id="submit"
                type="submit"
                text={
                  !emailRegEx.test(email) || password.length <= 5
                    ? 'disabled'
                    : 'login'
                }
                variant={
                  !emailRegEx.test(email) || password.length <= 5
                    ? 'dark'
                    : 'success'
                }
                disabled={!emailRegEx.test(email) || password.length <= 5}
              />
            </div>
          </form>
        </fieldset>
      ) : (
        '...loading'
      )}
    </>
  );
};

export default LoginComponent;
