import { useRef, useState } from "react";
import "./App.css";

import Webcam from "react-webcam";
import { createFaceLandmarker, predictWebcam } from "./helpers/visionHelpers";

function App() {
  const webcamRef = useRef();
  const [face, setFace] = useState(null);

  console.log(webcamRef.current);

  const handleWebcamReady = async () => {
    console.log("Webcam is ready!");
    console.log(webcamRef.current.video);

    const faceLandmarker = await createFaceLandmarker();
    console.log(faceLandmarker);
    predictWebcam(webcamRef.current.video, faceLandmarker, setFace);
  };

  return (
    <>
      <section className="FaceOfDarkness">
        <div
          className="leftEye"
          style={{ transform: `scaleY(${face?.leftEyeDistance})` }}
        ></div>
        <div
          className="rightEye"
          style={{ transform: `scaleY(${face?.rightEyeDistance})` }}
        ></div>
        <div className="nose"></div>
        <div
          className="mouth"
          style={{ transform: `scaleY(${face?.mouthDistance})` }}
        ></div>
      </section>
      <Webcam ref={webcamRef} style={{ width: 500 }} onUserMedia={handleWebcamReady} />
    </>
  );
}

export default App;
