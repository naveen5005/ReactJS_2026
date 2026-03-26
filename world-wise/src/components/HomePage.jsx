import React from "react";
import "../styles/HomePageModule.css";
import PageNav from "./PageNav";
const HomePage = () => {
  return (
    <main className="backGround-Image">
      <PageNav/>
      <section>
        <h1>
          You travel the world. <br />
          WorldWise keep track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every country you have
          visited, and a journal to record your memories.
          Start your journey with WorldWise today.
        </h2>
      </section>
      <button className="getStartedBtn">START TRACKING NOW</button>
    </main>
  );
};

export default HomePage;
