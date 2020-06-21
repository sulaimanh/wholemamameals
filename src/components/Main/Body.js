import React from "react";

import About from "./About/About";
// import Maryouma from "./Maryouma/Maryouma";
import Dishes from "../../containers/Dishes/Dishes";

const body = (props) => {
  return (
    <main>
      <About />
      {/* <Maryouma /> */}

      <Dishes shopRef={props.shopRef} />
    </main>
  );
};

export default body;
