import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app


const Project = {};

Project.scrolling = {
  // these hold references to helpers and rendered page elements (filled in by `initialize`)
  scroller: undefined, // an instance of scrollama
  steps: undefined, // an array of all the step elements

    
  // set up the webpage to scroll
  initialize: () => {
    // grab the elements on the page that are related to the scrolling
    const scrollWrapper = document.getElementById("scrolly");
    Project.scrolling.figure = scrollWrapper.getElementsByTagName("figure")[0];

    const article = scrollWrapper.getElementsByTagName("article")[0];
    Project.scrolling.steps = Array.from(
      article.getElementsByClassName("step")
    );
    
    // convert from HTMLCollection to Array for ease of use later
    // intialize the scrollama helper
    Project.scrolling.scroller = scroll();
    Project.scrolling.scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0,
        debug: false,
      })
      .onStepEnter(Project.scrolling.handleStepEnter)
      .onStepExit(Project.scrolling.handleStepExit);
    
    // setup the default view to be the right size and include first step
    Project.scrolling.handleResize();
    Project.scrolling.setBackdropImage(0); // remember: 0 means the first item in an array
  },

  
  // called by scrollama when the step is being entered
  handleStepEnter: (stepInfo) => {
    stepInfo = { Element}
    console.log(`Switched to step ${stepInfo.index}`);

    // ATTEMPTED BUT IT FUCKED EVERYTHING UP:
    // TO DO: 
    // Remove active class from all steps
    // Project.scrolling.steps.forEach(step => step.classList.remove('is-active'));
    // Add active class to the current step
    //stepInfo.element.classList.add('is-active');
    
    Project.scrolling.setBackdropImage(stepInfo.index);
  },

  // called by scrollama when moving out of a step
  handleStepExit: (stepInfo) => {
    // we don't make any transitions when a step scrolls out of view
  },

  // called to get content to be the right size to fit the device
  handleResize: () => {
    const stepH = Math.floor(window.innerHeight * 1); // update step heights
    Project.scrolling.steps.forEach(
      (step) => (step.style.height = stepH + "px")
    );
    const figureWidth = window.innerWidth;
    const figureHeight = window.innerHeight;
    Project.scrolling.figure.style.width = figureWidth + "px";
    Project.scrolling.figure.style.height = figureHeight + "px";
    Project.scrolling.figure.style.top = "0px";
    Project.scrolling.figure.getElementsByClassName("wrapper")[0].style.height =
      figureHeight + "px";
    Project.scrolling.scroller.resize(); // tell scrollama to update new element dimensions
  },
};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}