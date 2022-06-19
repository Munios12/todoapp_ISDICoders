import { Link } from 'react-router-dom';
import './menu.css';
export const Menu = ({ menuOptions }: { menuOptions: Array<any> }) => {
  return (
    <>
      <nav className="menu">
        <ul>
          {menuOptions.map((item) => {
            return (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
