import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';
import { logoutAction } from '../../Store/authReducer';
import { ButtonComponent } from '../../Common';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoginInfo = useSelector((state) => state.userLoginInfo);
  const { cookie } = userLoginInfo;
  const logoutInfo = useSelector((state) => state.logoutInfo);
  const { success: logoutSuccess } = logoutInfo;

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <header>
      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>

        {cookie && !logoutSuccess ? (
          <>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/admin"
            >
              admin
            </NavLink>

            <ButtonComponent
              id="submit"
              type="submit"
              text="logout"
              variant="light"
              disabled={false}
              onClick={handleLogout}
            />
          </>
        ) : (
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/forms"
          >
            login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;
