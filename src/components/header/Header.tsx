// import logo from './logo.svg';
import './header.css';

export const Header = ({
  appTitle,
  children,
}: {
  appTitle: string;
  children: JSX.Element;
}) => {
  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {appTitle}
        </a>
      </h1>
      <p>ISDI Coders</p>
      {children}
    </header>
  );
};
/*Con esta prop le decimos donde queremos inyectar los componentes hijos. */
