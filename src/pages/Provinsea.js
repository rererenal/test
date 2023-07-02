import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function Provinsea() {
  const [provinces,setProvinces] = useState(data.provinces)

  return (
    <>
      <Navbar />
      <Hero />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </>
  );
}

export default Provinsea;
