import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent, InputComponent } from '../../Common';
import { emailRegEx } from '../../Utils/regEx';
import { forgotPW } from '../../Store/authReducer';

const ForgotPWComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
  });
  const { email } = formData;

  const handResetPWSubmit = (e) => {
    e.preventDefault();
    // Dispatch Action
    dispatch(forgotPW(formData));

    setFormData({
      email: '',
    });
  };

  const handleOnchange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const forgotPassword = useSelector((state) => state.forgotPassword);
  const { loading, error, status } = forgotPassword;

  return (
    <>
      {!loading ? (
        <fieldset className="fieldSet">
          <legend>Forgot Password Form</legend>

          {error ? (
            <p>{error}</p>
          ) : status?.status === 'success' ? (
            <p>{status?.message}</p>
          ) : (
            <p>
              Simply send us your email address and we will send you an email
              with a reset link.
            </p>
          )}

          <form onSubmit={handResetPWSubmit}>
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

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ButtonComponent
                id="submit"
                type="submit"
                text={!emailRegEx.test(email) ? 'disabled' : 'submit'}
                variant={!emailRegEx.test(email) ? 'dark' : 'success'}
                disabled={!emailRegEx.test(email)}
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

export default ForgotPWComponent;
