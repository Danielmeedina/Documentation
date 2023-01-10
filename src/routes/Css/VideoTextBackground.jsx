import React from "react";
import Precode from "../../components/Precode";

const VideoTextBackground = () => {
  return (
    <article id="videotextbackground">
      <h2>Video text background</h2>
      <h3>option 1</h3>
      <p>
        put a video in the background, and the letters that they put are on top,
        the video is only seen through the letters.{" "}
        <span>this works with black color</span>
      </p>
      <small>
        video must be downloaded and saved in your project folder, doesn't work
        with youtube links
      </small>
      <Precode>
        {`
  
  <div class="container-div">
    <div class="video-cool">
      <video autoplay muted preload loop src="myvideo.mp4"></video>
      <h2>Welcomeeeeeeeee</h2>
    </div>
  </div>   

  <style>

  .container-div {
    width: 100%;
    height: 100vh;
    background-color: black; /*it only works with this color, don't change*/
    color: white; /*yes it can be changed, but this is recommended*/
  }

  .video-cool {
    position: relative;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-cool h2 {
    background-color: black; /*it only works with this color, don't change*/
    font-size: 220px;
    text-align: center;
    font-weight: 400;
    word-break: break-all;
    mix-blend-mode: multiply;
  }

  </style>
          `}
      </Precode>
      <h3>option 2</h3>
      <span>this works with white color</span>
      <small>
        video must be downloaded and saved in your project folder, doesn't work
        with youtube links
      </small>
      <Precode>
        {`
  
  <div class="container">
    <video src="video.mp4" preload loop muted autoplay></video>
    <h4>Welcome</h4>
  </div>    
  
  <style>
  .container {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  video,
  h4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  video {
    object-fit: cover;
  }

  h4 {
    font-size: 150px;
    font-weight: 900;
    line-height: 100vh;
    text-align: center;
    background-color: white;
    mix-blend-mode: screen;

    /* you can also try these effects */

    /* color: white;
    background-color: black;
    mix-blend-mode: overlay; */

    /* background-color: red;
    mix-blend-mode: difference; */
  }

  </style>

          `}
      </Precode>
    </article>
  );
};

export default VideoTextBackground;
