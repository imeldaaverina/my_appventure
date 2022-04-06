import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarPost from "./elements/NavbarPost";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';


const MainLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md border mx-auto">
          <NavbarPost/>
          <a href="./upload" className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
            <img src="./postIcon.svg" className="w-16"/>
          </a>
          <HomeProvider>
            <Posts />
          </HomeProvider>
        </main>
      <Footer />
    </>
  );

};

export default MainLayout;