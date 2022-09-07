import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
