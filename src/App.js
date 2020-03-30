import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab #8a Intro to Web Development</h1>
        <iframe
          title="Developer in the wild"
          style={{ marginTop: "15px" }}
          src="https://giphy.com/embed/L8K62iTDkzGX6"
          width="440"
          height="250"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p style={{ margin: "-1px" }}>
          <a
            style={{ fontSize: ".7em" }}
            href="https://giphy.com/gifs/web-development-L8K62iTDkzGX6"
          >
            via GIPHY
          </a>
        </p>
      </header>
      <div
        className="main-content"
        style={{
          opacity: 0.8
        }}
      >
        <p>
          <strong>
            <u>Lab Objective</u>:{" "}
          </strong>
          Build your own website.
        </p>
        <p>
          <b>
            <u>Introduction</u>:{" "}
          </b>
          The availability of professional-grade open source software has
          increased significantly in the past decade. The goal of the next two
          labs is to get exposure to a few state of the art examples. The tools
          you will be analyzing have numerous practical applications. As you
          complete the labs, think about potential ways you could apply each
          tool.{" "}
          <font color="#F03F47">
            You will be asked to provide a couple examples in your report.{" "}
          </font>{" "}
          <br /> <br />
          <font color="orange">
            {" "}
            Don't worry if your coding experience is limited or if you haven't
            worked with machine learning before!
          </font>{" "}
          This lab can be completed with less than 10 lines of code.{" "}
          <font color="#B0CF8F">
            However, there will be an opportunity to earn 10% extra credit which
            will require more code.
          </font>
        </p>
        <p>
          <strong>
            <u>Lab</u>:
          </strong>{" "}
          To build our webpage, we will use{" "}
          <a href="https://reactjs.org/tutorial/tutorial.html">React</a>, which
          is currently the most{" "}
          <a href="https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue-vs-svelte-vs-flutter">
            popular
          </a>{" "}
          frontend web development software. Despite being the the most widely
          used, there are a variety of{" "}
          <a href="https://2019.stateofjs.com/front-end-frameworks/">
            alternatives
          </a>{" "}
          that have their own strengths and weaknesses. Follow the steps below
          to complete this exercise:
        </p>
        <ul>
          <li>
            Download <a href="https://www.google.com/chrome/">Chrome</a> if you
            don't alread have it. We will be using Chrome's{" "}
            <a href="https://developers.google.com/web/tools/chrome-devtools">
              DevTools
            </a>{" "}
            later in this lab.
          </li>
          <li>
            Create your own <a href="https://github.com/join">GitHub</a> account
            and use your student status to get the{" "}
            <a href="https://education.github.com/pack">
              Student Developer Pack
            </a>
            . The developer pack isn't required to complete this assignment, but
            is still a great resource for students.
          </li>
          <li>
            Make a <a href="https://www.gitpod.io/">GitPod</a> account and
            connect it to your GitHub account. GitPod is an online IDE that
            anyone can use for 50 hours a month. Students who have the developer
            pack can use the IDE for up to 100 hours a month. Feel free to use
            another IDE such as{" "}
            <a href="https://code.visualstudio.com/">VSCode</a> if you have a
            preference.
          </li>
          <li>
            Create your own GitHub repository using whatever name you'd like and
            go to your repository homepage.
          </li>
          <li>
            If you've signed up for GitPod, there will be to a "Gitpod" button
            on the right side of your repository. Use that button to open the
            IDE within your newly created project. If using a different IDE, you
            can clone the repository to your local maching with{" "}
            <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">
              Git
            </a>
            .
          </li>
          <li>
            The IDE that you just opened is a running{" "}
            <a href="https://www.docker.com/">Docker</a> container that is
            preinstalled with the necessary software to build our app. (i.e.{" "}
            <a href="https://nodejs.org/en/">Node.js</a>) Use the IDE terminal
            to create your app as described in React's{" "}
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">
              documentation
            </a>{" "}
            documentation. You only need to follow the instructions under
            "Create React App." THe second step under that section uses "cd"
            which stands for "change directory." Knowing how to work with
            terminals using <a href="https://devhints.io/bash">Bash</a> can be
            very helpful when working with{" "}
            <a href="https://www.edureka.co/blog/iot-tutorial/">IoT</a> tools.
          </li>
          <li>
            After running the start command, your terminal will display a URL
            that you can follow to display your running app! The app is set up
            to continuously reload so you'll be able to see the result of any
            changes you make whenever you save an opened file.
          </li>
          <li>
            Explore your project's file structure. In your project's root,
            you'll find a <code>package.json</code> file that lists the
            installed softare, executable scripts, and a variety of other
            potential{" "}
            <a href="https://docs.npmjs.com/files/package.json">
              project specifications
            </a>
            . Every Node.js project has a <code>package.json</code> file so it's
            usually wise to check that file first whenever you explore a new
            project. The project's main source code can be found in the{" "}
            <code>src</code> folder. In that folder you'll find a series of{" "}
            <a href="https://htmlcheatsheet.com/js/">Javascript</a> and{" "}
            <a href="https://htmlcheatsheet.com/css/">CSS</a> files. Javascript
            is the current go-to for frontend logic code and CSS provides
            styling tools. Almost every website on the web runs on a mix of
            HTML, Javascript, and CSS files. There aren't any HTML files in your
            source folder, but there is an <code>index.html</code> file located
            in your public folder. Despite not being in the src folder, the{" "}
            <code>index.html</code> is connected to one of the Javascript files.
            Identify that Javascript file in your lab report and the variable id
            that is shared between the two files.
          </li>
          <li>
            Modify your app so that it includes your name, a different
            background color, and a single image of your choosing. Feel free to
            make any other customizations if you'd like to! Each of the three
            modifications require a single line of code respectively. React's
            syntax is similar to <a href="https://htmlcheatsheet.com/">HTML</a>{" "}
            syntax. React was designed to emulate HTML code since it enables
            developers to combine HTML and Javascript files into a single{" "}
            <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>.
            This detail isn't significant for this project but it's an important
            characteristic to be aware of if you decide to start any other React
            projects in the future.
          </li>
          <li>
            After you have made your modifications, you can build it for
            production by running "<code>npm run build</code>" in your terminal.
            The <code>build</code> command will create a new "<code>build</code>
            " folder that contains a static version of your app that is ready to
            be hosted publicly!
          </li>
          <li>
            After building your app, you need to{" "}
            <a href="https://rogerdudler.github.io/git-guide/">
              add, commit, then push
            </a>{" "}
            your code to your public repository. (i.e. (1) "git add -A", (2)
            "git commit -m "I updated thing C and added thing D", (3) "push")
            Always try to use detailed commit messages since you can use them in
            the future to find something located in a previous version of your
            repository.
          </li>
          <li>
            Verify that you have pushed your changes to your public repo by
            checking the last commit time, which is listed on the right side of
            your repository's homepage. If that time looks correct, then use the
            button located directly above that text to download or "git clone
            your-app-repo-url" your app to your local machine.
          </li>
          <li>
            To host your app, this tutorial will use{" "}
            <a href="https://www.netlify.com/">Netlify</a>'s free hosting
            service. Feel free to use whatever hosting service you'd like.
            Netlify makes it easy to host websites for free and offers a
            generous monthly memory bandwith. After you create your Netlify
            profile, you'll eventually reach a new site page that contains an
            option to drag and drop your site into a grey dashed box. Grab the
            build folder from your local project and drop it into that box.
          </li>
          <li>
            Go to your public URL to see your live site! You can change your
            public site name in the site-settings menu.
          </li>
        </ul>
        <p style={{ paddingLeft: "20px" }}>
          Include both partner's URLs when submitting your reports.
        </p>
      </div>
    </div>
  );
}

export default App;
