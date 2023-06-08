import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const userLoginInfo = useSelector((state) => state.userLoginInfo);
  const { cookie } = userLoginInfo;

  return (
    <header>
      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>

        {cookie ? (
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/admin"
          >
            admin
          </NavLink>
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
