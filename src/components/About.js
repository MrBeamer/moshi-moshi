import React from "react";
import "../css/About.css";
import "../css/mediaQueries.css";

export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          Fruit Panda is the leading online fruit delivery marketplace.
          Headquartered in Berlin, Germany. It operates in more than 20
          countries across 5 continents.
        </p>
        <p>
          Fruit Panda allows users to conveniently discover fair trade fruits
          and directly order their fruits online or via mobile.
        </p>
        <p>
          In Berlin, Fruit Panda was launched in March 2021 and has since grown
          to over 100 partner fruit suppliers nationwide.
        </p>
        <p>
          We are a small team of problem solvers and thinkers working around the
          clock to make Fruit Panda the most powerful online tool for fairtrade
          fruit delivery. We believe that ordering fruit should be fair, fast
          and definitely fun!
        </p>
        <p>
          Tired of the same fruits? Simply download the Fruit Panda app or go to
          www.fruitpanda.de, and enter your location to see which fruit
          suppliers deliver to you. Fruit delivery has never been easier!
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="woman with oranges"
      />
    </div>
  );
}
