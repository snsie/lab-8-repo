import React from "react";
import "../App.css";

import goodResult from "../good-result.png";
import badResult from "../bad-result.png";
import quantumCircuit from "../quantum-circuit.PNG";
import rlExample from "../rl-example.mp4";
const Lab8bPage = () => (
  <>
    <div className="Page-content">
      <header>
        <h1>Lab #8b: Open Source Machine Learning Apps</h1>

        <iframe
          className="gif"
          src="https://giphy.com/embed/lCrU3nO2gNWIU"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p>
          <a href="https://giphy.com/gifs/loop-robotic-lCrU3nO2gNWIU">
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
        Please watch the first two videos in the youtube playlist linked{" "}
        <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">
          here
        </a>{" "}
        before completing this lab. A rough intuition of the topics covered in
        those videos is required. There are four total videos in the playlist,
        but to reduce the workload on everyone no questions will be asked about
        topics covered in the last two. The final two videos are roughly 10-14
        minutes each and are worth checking out if you have the time. The
        author, Grant Sanderson, provides an intuitive introduction to neural
        networks. If this is your first time learning about neural networks,
        don't stress out if certain topics covered in the playlist don't click
        right away. Just focus on the overarching themes that Grant tries to
        reinforce.
      </p>
      <p>
        This lab is split into three parts.{" "}
        <font color="orange">
          You only need to complete part 1 to get full credit in this
          assignment.
        </font>{" "}
        Parts 2 and 3 are designed to expose everyone to some powerful open
        source resources and are worth checking out if you're interested.
      </p>
      <br />
      <h3 align="center">Part 1: Visualize Neural Networks</h3>
      <p>
        The objective of this part is to examine{" "}
        <a href="https://playground.tensorflow.org/">this</a> website. The
        website provides an interface to visualize the behavior of neural
        networks as they learn. There are a lot of different metrics that you
        can tweak, but we will keep things vanilla so please don't modify any
        parameters unless specifically asked to do so in this exercise. You may
        experience strange network behavior if certain variables are modified.
        If you think you might have changed anything, you can return to the
        website in a new tab using the link above. Read the help text at the
        bottom of the website to learn what the colors reprsent. X1 corresponds
        to x-axis (horizontal) inputs and X2 corresponds to y-axis (vertical)
        inputs.
      </p>
      <p>
        As you train the networks, watch the 2D output maps on the right side of
        the webpage. If the network is doing well, the background color will
        match the orange and blue points. The orange and blue points belong to
        two separate classes, similar to the 10 classes of digits displayed in
        the video. The background is the “output” or prediction of the neural
        network. Take a look at the two output maps below as an example. Both of
        them have the same input data, which is a small inner circle of blue
        points surrounded by an outer circle of orange points. The left image
        was made with just one neuron in the network, and the network struggled
        to produce a background that matched the points. The test loss was high,
        0.417. The right image was made with more neurons, notice how the
        background matches the points much better and the test less is only
        0.008.
      </p>
      <div
        style={{
          display: "flex",
          width: "90vw",
          height: "calc( 18vw * 1.35 ) ",
          justifyContent: "space-around"
        }}
      >
        <img style={{ width: "18vw" }} src={badResult} />

        <img style={{ width: "18vw" }} src={goodResult} />
      </div>
      <p>
        If you look at the four datasets under “DATA” on the left side of the
        webpage, you will notice that some of their points aren't lined up with
        the points on the output map on the right side of the screen. For
        example, the dataset on the left with two clusters displays the orange
        cluster at the top left corner of the box. If you click on that box to
        open the example, the output map displays the orange cluster on the
        bottom left corner of the box. Do not worry about this because the
        datasets on the left of the page are only representative patterns and
        will not match the exact input data when you run your test.
      </p>
      <ul>
        <li>
          <font color="red">
            For each of the following tasks, you will need to run three repeated
            trials. Report the three <strong>test losses</strong>, take an
            average of those losses, and report that value (i.e. average loss)
            as well.
          </font>{" "}
          Running multiple trials and taking averages of performance is common
          practice in machine learning. In the videos, Grant provides examples
          to illustrate why reporting performance on the training set isn't good
          practice. (example at 17:35 in video 2)
          <font color="orange">
            {" "}
            Points will not be deducted for any incorrect statements made when
            discussing the experiments listed below.
          </font>
        </li>

        <li>
          Open the circle example in the top left data box. In the example, a
          cluster of points belonging to the "<font color="blue">blue</font>"
          class are surrounded by points belonging to the "
          <font color="orange">orange</font>" class. Modify your network so that
          it only has one neuron and one hidden layer. Select just the x1 and x2
          features. You should see three total weights illustrated as two
          colored lines going from your selected x1, x2 features to the neuron
          and one colored line from the neuron to the output. Click play to let
          the model freely train on the data. Once the network's performance on
          the test set stops improving, stop the model and{" "}
          <font color="red">
            record your test loss result, then repeat two times. Share the three
            test loss values, the average test loss value, and one screenshot of
            the best test run. In your screenshot include the selected x1, x2
            features, the neuron, and the 2D output map.
          </font>
          .
        </li>
        <li>
          Repeat the previous step two additional times using (1) a network with
          two neurons in a single hidden layer, and (2) a network with three
          neurons in a single hidden layer.{" "}
          <font color="red">Record your results for both tasks</font>
        </li>
        <li>
          <font color="red">
            Compare performance differences (i.e. the average test loss) between
            the three examples in your reports.
          </font>
        </li>
        <li>
          Open the example located in the bottom left corner of the four
          possible datasets. The example displays two separate clusters. Similar
          to before, change your network so that it only has one neuron and one
          hidden layer. Push the button to the right of the play button 5 times
          to train the network for five epochs. An epoch is a single pass
          through a dataset. <font color="red">Record your results.</font>
        </li>
        <li>
          Modify the network so that it has eight hidden neurons and one hidden
          layer. Run the same task as described in the bullet point above.{" "}
          <font color="red">
            Record your results. Compare the average test loss (after five
            epochs) for the one hidden neuron example with the eight hidden
            neuron example.
          </font>{" "}
          <li>
            Open the spiral example and design your own network that can achieve
            a test loss lower than 0.05. You are free to modify any of the
            network parameters. There isn't one right choice. You may find it
            helpful to change the activation function to match the example that
            Lisha Li described (17:00 in video 1).{" "}
            <font color="red">
              Report the individaul/average test loss of your network, take a
              screenshot of your network, and described what changes you made.
            </font>{" "}
          </li>
          <p>
            <font color="red">Summary of Required Information:</font> Your lab
            report should have 6 screenshots – 3 screenshots from your runs with
            the top, left dataset with 1, 2, and 3 neurons, 2 screenshots from
            your runs with the bottom, left dataset with 1 and 8 neurons, and 1
            screenshot of you “beating the spiral” by showing a test loss of
            less than 0.05. Although you only need to provide one screenshot per
            scenario (e.g. top, left dataset with 1 neuron), you need to run
            each scenario three times and give the test loss for each time as
            well as the average as stated earlier in the lab.{" "}
          </p>
          <p>
            <strong>Important Note: </strong>The website limits users to 8
            neurons in a single hidden layer. It's common practice to have over
            a thousand neurons per hidden layer. Any characteristics of the
            networks that you identify might not hold true for larger networks.
            Trying to identify repeatable patterns is a valuable skill, but
            don't forget to test any assumptions when working in a new scenario.
          </p>
        </li>
        <h4 align="center">Optional Section</h4>
        <p>
          The following sections are optional. They are designed to get your
          personal envornment set up to run the website in development mode.
          Experimenting by modifying code and seeing what happens is a great way
          to improve your understanding of how everything works.
        </p>
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
          without risk of damaging the original author's source code. Once you
          have forked the repository, you will be able to find it under your
          personal repository list.
          <font style={{ color: "red" }}>
            Include each partner's URL in your report.
          </font>
        </li>
        <li>
          Click the GitPod button or clone the repo to your preferred IDE. This
          website example doesn't run on any app software such as React. You
          will notice that the.
        </li>
        <li>
          Read the repository's Readme.md and package.json files to identify
          what terminal commands you need to run to install the required
          dependencies and run the app in development. The terminal commands are
          similar to the commands you ran last week to initialize your React
          app. Markdown files (i.e. files with the .md extension) are commonly
          used to present static information, such as text and images.{" "}
          <a href="https://www.markdownguide.org/cheat-sheet/">This link</a> is
          a helpful cheatsheet to learn how markdown can be used to create
          unique documents. You will find the repository's main Readme.md file
          displayed on it's github homepage, directly below the graphic
          displaying the project files.
          <font style={{ color: "red" }}>
            Identify these terminal commands in your report.{" "}
          </font>{" "}
        </li>
      </ul>
      <br />
      <h3 align="center">
        Part 2: Apply Neural Networks to Reinforcement Learning
      </h3>
      <p>
        The purpose of this exercise is to examine reinforcement learning using
        Google Colab. Colab provides free access to GPUs and TPUs, which can
        significantly reduce the time required to train deeper networks.
      </p>
      <p>
        Reinforcement learning is a subset of machine learning that is focused
        on training agents to complete tasks.{" "}
        <a href="https://www.youtube.com/watch?v=JgvyzIkgxF0&t=404s">
          This video
        </a>{" "}
        provides a good introduction to reinforcement learning.
      </p>
      <ul>
        <li>
          Open{" "}
          <a href="https://colab.research.google.com/github/tensorflow/agents/blob/master/docs/tutorials/1_dqn_tutorial.ipynb">
            this Colab notebook
          </a>{" "}
          and hit the "Connect" button in the top right corner to initialize a
          runtime.
        </li>
        <li>Select "Runtime" then "Run all" to run the script.</li>
        <li>
          The network will require a few minutes to train. While it trains, read
          through the notebook to learn more about the cart-pole example.{" "}
          <font style={{ color: "red" }}>
            In your reports, identify the agent's action space and state space
            (i.e. what actions the agent is able to take and what the agent can
            observe.
          </font>
        </li>
        <li>
          <font color="red">
            {" "}
            Upload the video of your trained agent with your report.
          </font>{" "}
          The script is configured to generate the video automatically. You can
          also link your Colab notebook if the video file size is too large to
          upload.
        </li>
        <li>
          If you change your agent's state or action space and notice different
          behaviors (you will).{" "}
          <font color="red">Discuss the behaviors in your report.</font>
        </li>
      </ul>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <video src={rlExample} controls style={{ width: "50vw" }} />
      </div>{" "}
      <br />
      <h3 align="center">Part 3: Use IBM's quantum computer in the cloud</h3>
      <p>
        In this part, you will run your own experiment on one of IBM's quantum
        computers in the cloud.{" "}
        <a href="https://www.youtube.com/watch?v=u1XXjWr5frE">This video</a>{" "}
        provides a good introduction to quantum computing.
      </p>
      <ul>
        <li>
          Visit <a href="https://quantum-computing.ibm.com/">this link</a> and
          set up your account.
        </li>
        <li>
          Click the circuit composer button on the left side of the dashboard
          and then press the "New Circuit" button to start making your own
          quantum circuit.
        </li>
        <li>
          You can replicate the basic circuit shown in the image below or make a
          different circuit of your choosing.
        </li>
        <li>
          <font color="red">
            Run your circuit using one of IBM's quantum computers. Report and
            include an image of your setup/results.
          </font>
        </li>
      </ul>
      <div align="center">
        <img src={quantumCircuit} style={{ width: "85%" }} />
      </div>{" "}
      <p>
        You can't get anything wrong in this section so feel free to discuss
        potential hypotheses even if you have doubts that your hypothesis is
        correct. The interface will make a lot more sense after reading through
        the resources included in the dashboard.{" "}
        <font color="orange">
          Quantum Machine learning is still very young but has the potential to
          revolutionalize modern medicine.
        </font>{" "}
        One of the field's biggest needs is young scientists who are willing to
        experiment with quantum machine learning tools.
      </p>
      <h4 style={{ paddingLeft: "20px" }} align="center">
        You will be expected to write a brief lab report as you have done
        previously. You need to respond to all objectives that are marked in{" "}
        <font color="red">red</font> within your reports. Include both partner's
        respective URLs and GitHub repositories when submitting your reports.
      </h4>
      <h5 style={{ textAlign: "center" }}>
        We hope you enjoyed learning the material in the last two labs. The goal
        of the labs was to expose everyone to some useful open source resources.
        To get the full benefit out of these labs, you need to start tweaking
        different things and running your own experiments. Experimenting and
        reading papers are the best way to strengthen your understanding of how
        these tools work.
      </h5>
    </div>
  </>
);

export default Lab8bPage;
