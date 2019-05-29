import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css';
import '../styles/css/custom.css';

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    // Initialize the GL context
  	const gl = canvas.getContext("webgl");
  	// Only continue if WebGL is available and working
	if (gl === null) {
	    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
	    return;
	}

	// Set clear color to black, fully opaque
	gl.clearColor(0.078, 0.655, 0.424, 1.0);
	// Clear the color buffer with specified clear color
	gl.clear(gl.COLOR_BUFFER_BIT);
  }
  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' className="hidden" />
      </div>
    )
  }
}
export default Canvas