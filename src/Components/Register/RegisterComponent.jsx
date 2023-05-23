import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputComponent, ButtonComponent } from '../../Common';
import { nameRegEx, emailRegEx, passwordRegEx } from '../../Utils/regEx';

import { fetchUser } from '../../Store/userReducer';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    //Dispatch Action here
    dispatch(fetchUser(formData));

    setFormData({
      name: '',
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

  const userInfo = useSelector((state) => state.userInfo);

  const { user, success, loading, error } = userInfo;

  return (
    <>
      {!loading ? (
        <fieldset className="fieldSet">
          <legend>Registration Form</legend>
          {error ? error : null}
          {success ? 'Success Message' : null}
          <form onSubmit={handleRegistrationSubmit}>
            <InputComponent
              id="name"
              label="name"
              value={name}
              type="text"
              name="name"
              required
              className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(name) && name.length !== 0
                  ? `Name field must contain a first name and surname.`
                  : null
              }
              onChange={handleOnchange}
            />

            <InputComponent
              id="email"
              label="email"
              type="email"
              name="email"
              value={email}
              className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
              error={
                !emailRegEx.test(email) && email.length !== 0
                  ? `Invalid email address.`
                  : null
              }
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
              error={
                !passwordRegEx.test(password) && password.length !== 0
                  ? `Password must contain at least l Capital letter, 1 number and 1 special character.`
                  : null
              }
              onChange={handleOnchange}
            />

            <div>
              <ButtonComponent
                id="submit"
                type="submit"
                text={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  password.length <= 5
                    ? 'disabled'
                    : 'register'
                }
                variant={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  !passwordRegEx.test(password)
                    ? 'dark'
                    : 'success'
                }
                disabled={
                  !emailRegEx.test(email) ||
                  !nameRegEx.test(name) ||
                  !passwordRegEx.test(password)
                }
              />
            </div>
          </form>
        </fieldset>
      ) : (
        '....loading comp'
      )}
    </>
  );
};

export default RegisterComponent;
