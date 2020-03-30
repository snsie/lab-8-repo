import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab #8 Web Development and Machine Learning</h1>

        <iframe
          style={{ marginTop: "15px" }}
          title="Reinforcement Learning GIF"
          src="https://giphy.com/embed/lCrU3nO2gNWIU"
          width="440"
          height="250"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p style={{ margin: "-1px" }}>
          <a
            style={{ fontSize: ".7em" }}
            href="https://giphy.com/gifs/loop-robotic-lCrU3nO2gNWIU"
          >
            via GIPHY
          </a>
        </p>
      </header>
      <div className="main-content">
        <p>
          <strong>Lab Objective: </strong>Build your own website and explore
          machine learning.
        </p>
        <p>
          <strong>Background: </strong>The availability and capability of open
          source software has increased significantly in the past decade. The
          goal of this lab is to get exposure to a few state of the art
          examples. Don't worry if your coding experience is limited or if you
          haven't worked with machine learning before! Each section has detailed
          instructions and is designed for anyone interested in web development
          or machine learning.
        </p>
        <p>
          <strong>
            <u>Part 1</u>:{" "}
          </strong>{" "}
          Lets start things off by building our own webpage and deploying it
          with a public url. To build our webpage, we will1 use{" "}
          <a href="https://reactjs.org/tutorial/tutorial.html">React</a> Each
          person's webpage must include the following to get full credit. You
          will submit your individual URLs on Canvas with your reports. Follow
          the steps below to work through this
        </p>
      </div>
    </div>
  );
}

export default App;
