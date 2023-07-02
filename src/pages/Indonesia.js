import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";

function Indonesia() {
  return (
    <>
      <Navbar />
      <Hero />
      <Global URL={"https://covid19.mathdro.id/api/countries/indonesia"}/>
      <Summary URL={"https://covid19.mathdro.id/api/countries/indonesia/og"}/>
      <Footer />
    </>
  );
}

export default Indonesia;
