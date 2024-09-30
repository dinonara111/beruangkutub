import React from "react";
import Header from "../components/HomeOne/home";  // Pastikan path menuju file header benar
import About from "../components/HomeOne/about"; // Pastikan path menuju file about benar
import Question from "../components/HomeOne/question"; // Galeri atau komponen lainnya
import Faq from "../components/HomeOne/faq"; 
import Footer from "../components/Common/footer"; // Footer jika Anda memilikinya

const Home = () => {
  return (
    <div>
      <Header />   {/* Bagian Header */}
      <About />    {/* Bagian About */}
     <Question />  {/* Bagian Gallery */}
     <Faq /> 
     <Footer />
    </div>
  );
};

export default Home;
