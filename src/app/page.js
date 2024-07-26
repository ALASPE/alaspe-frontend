import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="h-screen text-black">
        Home
      </div>
      <Footer/>
    </>
  );
}
