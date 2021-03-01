import { NavLink } from 'react-router-dom';
import './Header.scss';
import routes from '../../routes';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink__active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.movies} className="NavLink" activeClassName="NavLink__active">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
