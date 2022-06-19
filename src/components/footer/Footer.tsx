import './footer.css';

const Footer = ({ appCompany }: { appCompany?: string }) => {
  return (
    <footer>
      <address>{appCompany && appCompany}</address>
    </footer>
  );
};

export default Footer;
