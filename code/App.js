/***
 * HMR -> Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while developing
 * Compression
 * Compatible with older versions of browsers
 * HTTPS on dev
 * Port Number
 * Consistent Hashing
 * Zero-configuration
 * Tree-Shaking -> Removing Unwanted
 * 
 * 
 * 
 * Transitive Dependencies
 */


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1 from parcel"
  );
  
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );
  console.log(container);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);
  