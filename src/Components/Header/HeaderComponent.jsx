import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/forms"
        >
          login
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderComponent;