import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarPost from "./elements/NavbarPost";

const MainLayout = ({ children }) => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarPost/>
          <a href="./upload" className="flex justify-end mr-10 mt-10">
            <img src="./postIcon.svg" className="w-16"/>
          </a>
        {children}
        </main>
      <Footer />
    </>
  );

};

export default MainLayout;