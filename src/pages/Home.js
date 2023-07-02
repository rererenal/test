import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import Summary from "../components/Summary";
import data from "../utils/constants/provinces";

function Main() {
  const [provinces,setProvinces] = useState(data.provinces)

  return (
    <main>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, paissss</h2> */}
      
      {/* <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} /> */}
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Global URL={"https://covid19.mathdro.id/api"}/>
      <Summary URL={"https://covid19.mathdro.id/api/og"}/>
      <Footer />
    </>
  );
}

export default Home;
