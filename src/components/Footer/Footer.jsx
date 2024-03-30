import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.container}>
      &copy; {new Date().getFullYear()} By: Charlton Teo | goit-react-hw-08-phonebook
    </footer>
  );
};
