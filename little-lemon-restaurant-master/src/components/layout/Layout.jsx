import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "About",
      path: "/#about",
      hashLink: true,
    },
    {
      name: "Menu",
      path: "/#menu",
      hashLink: true,
    },
    {
      name: "Reservations",
      path: "/reservations",
      hashLink: false,
    },
    {
      name: "Login",
      path: "/login",
      hashLink: true,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
