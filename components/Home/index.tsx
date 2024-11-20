import React from "react";
import Banner from "./components/Banner";
import Cities from "./components/Cities";
import Popular from "./components/Popular";
import Testimoni from "../Testimoni";

function Home() {
  return (
    <>
      <Banner />
      <Cities />
      <Popular />
      <Testimoni />
    </>
  );
}

export default Home;
