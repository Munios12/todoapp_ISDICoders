import { menuOptionsType } from '../../interfaces/menuOptions';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';

export const Layout = ({
  appTitle,
  menuOptions,
  appCompany,
  children,
}: {
  appTitle: string;
  menuOptions: menuOptionsType;
  appCompany: string;
  children: JSX.Element;
}) => {
  return (
    <>
      <Header appTitle={appTitle}>
        <Menu menuOptions={menuOptions} />
      </Header>
      <main>{children}</main>
      <Footer appCompany={appCompany} />
    </>
  );
};
