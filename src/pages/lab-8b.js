import React from "react";
import "../App.css";
import image from "../network_vis.JPG";
const Lab8bPage = () => (
  <>
    <div className="Page-content">
      <header>
        <h1>Lab #8b: Open Source Machine Learning Apps</h1>
        <iframe
          src="https://giphy.com/embed/4LiMmbAcvgTQs"
          width="440"
          height="250"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p style={{ margin: "-1px" }}>
          <a
            style={{ fontSize: ".7em" }}
            href="https://giphy.com/gifs/neural-networks-4LiMmbAcvgTQs"
          >
            via GIPHY
          </a>
        </p>
      </header>
      <p>
        <strong>
          <u>Lab Objective</u>:{" "}
        </strong>
        Use open source tools to explore machine learning.
      </p>
      <p>
        <b>
          <u>Introduction</u>:{" "}
        </b>
        Machine learning refers to the design of software that can learn from
        data. Developing a practical understanding of machine learning is a
        worthwhile endeavor because it can be applied to virtually every field
        in science. The goal of this lab is to use open source resources to
        develop this skill.
      </p>
      <p>
        Please watch the youtube playlist linked{" "}
        <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">
          here
        </a>{" "}
        before completing this lab. A rough intuition of the topics covered in
        the videos is required. The playlist is roughly an hour long and is
        split into four separate videos. The author, Grant Sanderson, provides
        an intuitive introduction to neural networks. If this is your first time
        learning about neural networks, don't stress out if certain topics
        covered in the playlist don't click right away. Just focus on the
        overarching themes that Grant tries to reinforce.
      </p>
      <p>
        <strong>
          <u>Lab</u>:
        </strong>{" "}
        This lab is split into three parts. Part 1 is worth 80% of the total lab
        credit. Parts 2 and 3 are each worth 10%. In part 1, we will examine{" "}
        <a href="https://playground.tensorflow.org/">this</a> open source
        application to visualize neural networks and reinforce the concepts
        discussed in the videos. In part 2, we will use{" "}
        <a href="https://colab.research.google.com/github/tensorflow/agents/blob/master/docs/tutorials/1_dqn_tutorial.ipynb">
          Google Colab
        </a>{" "}
        to build on what we've learned and apply a neural network to a
        reinforcement learning task. Reinforcement learning is a subset of
        machine learning that studies task-based behavior of artificial agents
        in simulated environments. //I will be adding more here.// In the colab
        notebook, the agent is a cart and its task is to balance a pole.
      </p>

      <br />
      <strong>Follow the steps below to complete this exercise:</strong>
      <h3 align="center">Part 1: Visualize Neural Networks</h3>
      <ul>
        <li>
          Open tensorflow's{" "}
          <a href="http://playground.tensorflow.org/">
            neural network playground
          </a>{" "}
          and click the github button at the top right corner of the page to go
          to the website's github repo. Once you are in the project repo, click
          the button that says "Fork," which is located in the top right corner
          of the page. Forking a github repository will create a copy of the
          repo under your profile. It is a great way to experiment with open
          source repos because you can push any changes you make to your fork
          without risk of damaging the original author's source code.{" "}
          <font style={{ color: "red" }}>
            Include each partner's URL in your report.{" "}
          </font>
        </li>
        <li>
          Click the GitPod button or clone the repo to your preferred IDE. This
          website example doesn't run on any app software such as React. It
          relies on vanilla Javascript, HTML, and CSS.
        </li>
        <li>
          Read the repository's Readme.md and package.json files to identify
          what terminal commands you need to run to install the required
          dependencies and run the app in development.{" "}
          <font style={{ color: "red" }}>
            Identify these terminal commands in your report.{" "}
          </font>{" "}
          You don't need to run development mode and you can complete the rest
          of this part using the public website. The purpose of these initial
          tasks is to get your envornment set up so that you can experiment with
          the website if you'd like to.
        </li>
        <li>
          Lets do a sanity check to ensure we understand how data flows from the
          input of a network to the output (i.e the forward pass). We're not
          going to worry about backpropagation specifics in this lab. Read the
          help text at the bottom of the website to learn what the colors
          reprsent. X1 corresponds to the x-axis and X2 corresponds to the
          y-axis. The image below is an example that has a single node in the
          hidden layer. The RELU{" "}
          <a href="https://en.wikipedia.org/wiki/Activation_function">
            activation function
          </a>{" "}
          is being used, which Lisha Li talked about at the end of the first
          video. The network hasn't been trained, but we're not concerned with
          performance.{" "}
          <font color="orange">
            Our goal is to calculate the output of a network based on two inputs
            of our chosing.
          </font>{" "}
          I'm going to do that now using the image below. The weight line
          connected to input X1 has a light orange color, which tells us that it
          is negative.The exact value of the weight is -0.28. The weight
          connected to X2 is light blue, and has an exact value of 0.17. The
          third weight to the right of the single hidden node is orange and has
          an exact value of -0.48. Based on the 2D output map on the right, an
          input of X1=3 and X2=-3 should give a value close to zero (the region
          around that coordinate is light blue). An input of X1=-4 and X2=4
          should return a negative output (the region around that coordinate is
          orange). Lets derive these two scenarios now. Remember that each input
          gets multiplied with the respective weight they are connected to.
          Every input*weight product (2 in this example) is then added together.
          That sum is fed into the RELU function. The output of the RELU
          function is multplied with the third weight, giving us our final
          output. For X1=3 and X2=-3, the two products are 3*-0.28=-0.84 and
          -3*0.17=-0.51. Both of those values are negative so their sum will be
          negative. The RELU activation function interprets negative values as
          zero. No matter what the third weight is in this scenario, the RELU
          output is zero so any product will remain at zero. As a result, the
          precicted output is zero. It makes sense for the entire region around
          that coordinate to have the exact same color shade, since they are all
          going to be zero. For X1=-4 and X2=4, -4*-0.28 = 1.12 and 4*0.17=0.68.
          The sum of the products is 1.12+0.68=1.8. Finally, the output from the
          RELU node is multiplied with the third weight, giving an output of
          1.8*-0.48=-0.86. This output makes sense because the 2D output map on
          the right is a relatively dark shade of orange at that location.{" "}
          <font color="red">
            Using the same approach that was just detailed. Initialize your own
            network with the same specs (one hidden node, RELU activation
            function, there should be 3 total weights, don't train network).
            Take a snapshot of the network similar to the one below, list the
            weights, choose two sets of 2D inputs that should give different
            color outputs, then calculate and discuss the actual derived
            outputs.
          </font>
          You may need to reinitialize the network if the entire 2D output map
          is a single color.
        </li>
        <br />
        <img src={image} height="30%" width="80%" />
      </ul>
      <h3 align="center">
        Part 2: Apply Neural Networks to Reinforcement Learning
      </h3>
      <ul>
        <li>
          Open{" "}
          <a href="https://colab.research.google.com/github/tensorflow/agents/blob/master/docs/tutorials/1_dqn_tutorial.ipynb">
            this
          </a>{" "}
          Colab notebook and hit the "Connect" button in the top right corner to
          initialize a runtime.
        </li>
        <li>Select "Runtime" then "Run all" to run the script.</li>
        <li>
          The network will require a few minutes to train. While it trains, read
          through the notebook to learn more about the cart-pole example.{" "}
          <font style={{ color: "red" }}>
            In your reports, identify the agent's action space and state space
            (i.e. what actions the agent is able to take and what the agent can
            observe. ( I will be adding more info about RL before asking this
            question)
          </font>
        </li>
      </ul>
      <h3 align="center">Part 3: Use IBM's quantum computer in the cloud</h3>
      <ul></ul>
      <h4 style={{ paddingLeft: "20px" }} align="center">
        You will be expected to write a brief lab report as you have done
        previously. You need to respond to all objectives that are marked in{" "}
        <font color="red">red</font> within your reports. Include both partner's
        respective URLs and GitHub repositories when submitting your reports.
      </h4>
    </div>
  </>
);

export default Lab8bPage;
