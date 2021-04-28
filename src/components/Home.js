import React from "react";
import "../css/Home.css";
import "../css/mediaQueries.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Fair traded Fruits?</h1>

        <p className="highlight">Choosing fairtrade fruit makes a difference</p>

        <p>
          About 98 percent of tropical fruits are grown in developing countries,
          where Fairtrade traditionally supports small-scale farmers and
          plantation workers. Fairtrade certifies both fresh and dried fruit as
          well fruit for juices.
        </p>

        <p>
          Fairtrade Standards require stringent environmental and safety
          measures to protect farmers’ and workers’ health as well as the
          environment, banning a slew of hazardous materials entirely.
        </p>

        <p>
          Living well begins with eating well. Order your fruits from{" "}
          <strong>Fruit Panda</strong> with our easy to use app, and get your
          fresh and fair traded fruits delivered straight to your doorstep.
        </p>

        <Link to="/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80"
        alt="woman with oranges"
      />
    </div>
  );
}
