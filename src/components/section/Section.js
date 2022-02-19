import { useState } from "react";
import Referal from "./Referal";
import Reward from "./Reward";
import SectionTop from "./SectionTop";
import Table from "./Table";
import Tutorial from "./Tutorial";

const Section = () => {
    

    return <section id="section">
  
    
    <SectionTop />
<Tutorial />
   <Reward />
    <Referal />
   <Table />
  </section>
}

export default Section;
