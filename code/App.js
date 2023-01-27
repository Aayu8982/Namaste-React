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


const Title = () => {
  return <h1 id="heading">Aayush Sharma</h1>
}

// component composition
const HeaderComponent = () => {
 return(
  <div>
    <Title />
    <h1>This is functional Component</h1>
    <h2>This is h2 Tag</h2>
  </div>
 )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent />);
