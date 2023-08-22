import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Profile from "./Components/Profile/Profile";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      
      <Header id="header" />
      <Main id="main" />
      <About id="about" />
      <Service id="service" />
      <Profile id="profile" />
      <Blog id="blog" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  );
}

export default App;
