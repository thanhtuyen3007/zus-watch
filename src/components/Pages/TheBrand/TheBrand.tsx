import React, { ReactElement } from "react";

import { Slider } from "../../Slider/Slider";

const TheBrand = (): ReactElement => {
  return (
    <section>
      <Slider url="https://images.unsplash.com/photo-1642976240849-d5f7dac74b23?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h1>The Brand</h1>
      <p>Welcome to the brand page!</p>
    </section>
  );
};

export default TheBrand;
