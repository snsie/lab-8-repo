import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab #8a Intro to App Development</h1>
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
          Build and deploy your own web application.
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
            Discuss with your partner and provide a couple examples in your
            report.{" "}
          </font>{" "}
          <br /> <br />
          <font color="orange">
            {" "}
            Don't worry if your coding experience is limited!
          </font>{" "}
          This lab can be completed with less than 10 lines of code.{" "}
        </p>
        <p>
          <strong>
            <u>Lab</u>:
          </strong>{" "}
          To build your app, we will use{" "}
          <a href="https://reactjs.org/tutorial/tutorial.html">React</a>, which
          is currently the most{" "}
          <a href="https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue-vs-svelte-vs-flutter">
            popular
          </a>{" "}
          front-end web development software. Despite being the the most widely
          used, there are a variety of{" "}
          <a href="https://2019.stateofjs.com/front-end-frameworks/">
            alternatives
          </a>{" "}
          that have their own strengths and weaknesses. Almost every established
          front-end framework can be boiled down to a fusion of{" "}
          <a href="https://htmlcheatsheet.com/">HTML</a>,{" "}
          <a href="https://htmlcheatsheet.com/js/">Javascript</a>, and{" "}
          <a href="https://htmlcheatsheet.com/css/">CSS</a> code. Hypertext
          Markup Language (HTML) is the oldest out of the three and is primarily
          used to define the layout of webpages. Cascading style sheets (CSS)
          was introduced second and enables developers to style their HTML
          elements (e.g. font style or coloring). To incorporate coding logic
          (e.g. if, for, and while statements), Javascript was introduced. It's
          an easy language to learn and can be included in any HTML file by
          bounding the Javascript code with a{" "}
          <a href="https://www.w3schools.com/tags/tag_script.asp">
            {"<script>"}
          </a>{" "}
          tag. If you haven't worked with Javascript before, it feels a lot like
          MATLAB. It doesn't care about data types (e.g.{" "}
          <a href="https://www.eyesoreinc.com/become-nerd-basic-data-type-cheat-sheet/">
            int, bool or float
          </a>
          ), which certain languages require to be specified (e.g. Python might
          be thrown off if you try to use a floating point number to specify an
          array index - myarray[5.0] will result in an error). React's framework
          provides an Application Protocol Interface (
          <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">
            API
          </a>
          ) that enables developers to write HTML style code in Javascript
          files. React's emulated HTML code enables makes it easy to fuse HTML
          elements with Javascript logic and is referred to as{" "}
          <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>. This
          info isn't significant for this lab, but it's an important
          characteristic to be aware of if you decide to start any other React
          projects in the future.
        </p>
        <p>
          To store your project files, you will be using{" "}
          <a href="https://www.youtube.com/watch?v=w3jLJU7DT5E">GitHub</a>.
          GitHub is a powerful resource to store your project code and maintain
          a detailed history of every modification you've ever made to your
          project. You don't have to worry about losing your previous work if
          your hard drive crashes and you can demonstrate the contributions
          you've made to your project if you ever have to prove ownership of
          your work.
        </p>
        <p>
          Another tool you will be working with is{" "}
          <a href="https://www.gitpod.io/blog/gitpod-launch/">GitPod</a>. GitPod
          is an online Integrated Development Environment (IDE) that anyone can
          freely use for 50 hours a month. Students who have the{" "}
          <a href="https://education.github.com/pack">
            Github Student Developer Pack
          </a>{" "}
          can use the IDE for up to 100 hours a month. User sessions in GitPod
          run as remote{" "}
          <a href="https://docs.docker.com/engine/docker-overview/">Docker</a>{" "}
          containers. You can tweak your containers to preinstall whatever
          software you will be using. You can think of Docker containers as
          protective snow globes that hold your running code and ensure that it
          will run in any environment.{" "}
          <font color="orange">
            When working with GitPod, you should always save your code using
            GitHub's{" "}
            <a href="https://rogerdudler.github.io/git-guide/">
              add, commit, then push
            </a>{" "}
            pattern. GitPod containers are temporary and are deleted
            automatically by GitPod after 14 days of inactivity.
          </font>{" "}
          Add will send any modified files (relative to your public repository)
          to a local staging area. You can specify individual files (e.g. "git
          add MyNewFile.py") or use the "-A" option to add all new or modified
          files to the staging area. Commit will take a snapshot of the
          currently staged changes and helps maintain a clear history of how
          your work evolved. You should include a message when you run commit
          your code since you can refer to that message later if you need to
          find something that was removed at some point when developing your
          project. Always try to use detailed commit messages since you can use
          them in the future to find something located in a previous version of
          your repository. You should use "
          <a href="https://www.atlassian.com/git/tutorials/inspecting-a-repository">
            git status
          </a>
          " to display all local modifications relative to your remote GitHub
          repository. Run "<code>git status</code>" first since it will help
          when writing your commit messages. Finally, push will "push" your
          modified local repository to your remote repository. Your local and
          remote repositories will then be synced and will mirror each other. If
          you have a "<code>.gitignore</code>" file (which you will), any files
          or folders listed in the file will not be sent to the public
          repository. Syncing repositories can take a long time so excluding
          certain folders or files can reduce the time required to sync your
          repositories. It's also a useful way to include private code (e.g.
          passwords) in your local repository that you don't want anyone else to
          see. In summary, run: (1) "git status" (2) "git add -A", (3) "git
          commit -m "I updated thing C and added thing D", (4) "push").
        </p>
        <p>
          <font color="orange">
            Don't let yourself get pigeonholed into strictly using one tool.
          </font>{" "}
          Every new tool you learn will improve your ability to learn more tools
          at faster rates down the road. Individual tools are also constantly
          evolving and it's important to keep up with recent changes or fixes.
          It's good to have a few cheatsheets on hand to remember what language
          A's <code>if</code> statements look like compared to language B's{" "}
          <code>if</code> statements (e.g.{" "}
          <a href="https://devhints.io/">Ex. 1</a>,{" "}
          <a href="https://htmlcheatsheet.com/">Ex. 2</a>,{" "}
          <a href="https://htmlcheatsheet.com/css">Ex. 3</a>,{" "}
          <a href="https://htmlcheatsheet.com/js">Ex. 4</a>).
        </p>
        <br />
        <strong>Follow the steps below to complete this exercise:</strong>
        <h3 align="center">Set Up Your Dev Environment</h3>
        <ul>
          <li>
            Download <a href="https://www.google.com/chrome/">Chrome</a> if you
            don't already have it. We will be using Chrome's{" "}
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
            .{" "}
            <font color="orange">
              The developer pack isn't required to complete this assignment, but
              is still a great resource for students.
            </font>
          </li>
          <li>
            Make a <a href="https://www.gitpod.io/">GitPod</a> account and
            connect it to your GitHub account. Feel free to use another IDE such
            as <a href="https://code.visualstudio.com/">VS Code</a> if you have
            a preference. VS Code is a more robust long-term solution because it
            runs on your own machine and doesn't have a quota.
          </li>
          <li>
            Create your own GitHub repository using whatever name you'd like and
            go to your repository homepage.
          </li>
          <li>
            If you've signed up for GitPod, there will be to a "Gitpod" button
            on the right side of your repository. Use that button to open the
            IDE within your newly created project. If using a different IDE, you
            can clone the repository to your local machine with{" "}
            <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">
              Git
            </a>
            .
          </li>
        </ul>
        <h3 align="center">Build Your App</h3>
        <ul>
          <li>
            The IDE that you just opened is a running{" "}
            <a href="https://docs.docker.com/engine/docker-overview/">Docker</a>{" "}
            container that is preinstalled with the necessary software to build
            your app. (i.e. <a href="https://nodejs.org/en/">Node.js</a>) Use
            the IDE terminal to create your app as described in React's{" "}
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">
              documentation
            </a>
            . You only need to follow the instructions under "Create React App."
            The second step under that section uses "cd" which stands for
            "change directory." Knowing how to work with terminals using{" "}
            <a href="https://devhints.io/bash">Bash</a> can be very helpful when
            working with{" "}
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
            project. Your project's main source code can be found in the{" "}
            <code>src</code> folder. In that folder you'll find a series of
            Javascript and CSS files. There aren't any HTML files in your source
            folder, but there is an <code>index.html</code> file located in your
            public folder. Despite not being in the src folder, the{" "}
            <code>index.html</code> is connected to one of the Javascript files.{" "}
            <font color="red">
              Identify that Javascript file in your lab report and the variable
              id that is shared between the two files.
            </font>
          </li>
          <li>
            Open up your project into a new window, then press "ctrl-shift-c"
            (command-shift-c on mac) to open up the Elements panel in{" "}
            <a href="https://developers.google.com/web/tools/chrome-devtools">
              Chrome DevTools
            </a>
            . The Elements panel contains your compiled html code, which will
            update whenever you modify and save any of your project files. This
            is known as{" "}
            <a href="https://hashnode.com/post/what-is-hot-reloading-exactly-is-it-just-another-fancy-term-for-live-reloading-cirvu9avg0c8mmk53b5zxr3ga">
              hot reloading
            </a>{" "}
            and it is very helpful when developing your software. The top left
            corner of the DevTools panel contains an image of a mouse hovering
            over a box. Make sure that button is highlighted then hover over
            specific elements of your app.
          </li>
          <li>
            You can also hover over the rows in the DevTools Elements pane.
            Items in the html page will also flash when hovering over the
            corresponding html element code!
          </li>{" "}
          <li>
            On the left side of the html code there are triangles that you can
            click to collapse ore reveal subsections of your app. Reveal the
            each section so that you can hover over your mouse over the image
            tag{" "}
            <a href="https://www.w3schools.com/tags/tag_img.asp">
              <code>{"<img src=...>"}</code>
            </a>{" "}
            that corresponds to the spinning App logo.
          </li>
          <li>
            You'll notice that the rotating box contains the text "img.App-logo"
            in a corner. App-logo is actually a{" "}
            <a href="https://www.geeksforgeeks.org/html-class-attribute/">
              class
            </a>{" "}
            (referred to as{" "}
            <a href="https://reactjs.org/docs/faq-styling.html">className</a> in
            React).{" "}
            <font color="red">
              Identify every className that was defined in the source code files
              and include them in your reports. Discuss why there are repeated
              class names in the CSS files.
            </font>
          </li>
          <li>
            <font color="red">
              Modify your app so that it includes your name, a different
              background color, and a single image of your choosing.
            </font>{" "}
            Feel free to make any other customizations if you'd like to! Each of
            the three modifications require a single line of code respectively.
          </li>
          <li>
            After you have made your modifications, you can build it for
            production by running "<code>npm run build</code>" in your terminal.
            The <code>build</code> command will create a new "<code>build</code>
            " folder that contains a static version of your app that is ready to
            be hosted publicly!
          </li>
        </ul>
        <h3 align="center">Deploy Your App</h3>
        <ul>
          <li>
            Follow the git pipeline to sync your current environment with your
            GitHub repository.
          </li>
          <li>
            Verify that you have pushed your changes to your public repository
            by checking the last commit time, which is listed on the right side
            of your repository's homepage. If the build folder isn't listed,
            check your .gitignore file to see if it includes a build folder. If
            it is, remove it then add/commit/push the change. If build folder is
            listed and the time looks correct, then use the button located
            directly above that text to download or "git clone
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
        <h4 style={{ paddingLeft: "20px" }} align="center">
          You will be expected to write a brief lab report as you have done
          previously. You need to respond to all objectives that are marked in{" "}
          <font color="red">red</font> within your reports. Include both
          partner's respective URLs and github repos when submitting your
          reports.
        </h4>
      </div>
    </div>
  );
}

export default App;
