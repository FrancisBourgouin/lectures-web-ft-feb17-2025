import vision from "@mediapipe/tasks-vision";

const { FaceLandmarker, FilesetResolver } = vision;

let webcamRunning = true;
let lastVideoTime = -1;

const calculateDistance3D = (pointA, pointB) => {
  const x = Math.pow((pointA.x - pointB.x), 2)
  const y = Math.pow((pointA.y - pointB.y), 2)
  const z = Math.pow((pointA.z - pointB.z), 2)

  return Math.sqrt(x + y + z)
}

export async function createFaceLandmarker() {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
}

export function predictWebcam(video, faceLandmarker, callback) {
  let results = undefined;
  let startTimeMs = performance.now(); // Fast Date.now()

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }
  if (results && results.faceLandmarks[0]) {
    const topLeftEye = results.faceLandmarks[0][159]
    const bottomLeftEye = results.faceLandmarks[0][145]

    const topRightEye = results.faceLandmarks[0][386]
    const bottomRightEye = results.faceLandmarks[0][374]

    const topMouth = results.faceLandmarks[0][11]
    const bottomMouth = results.faceLandmarks[0][16]

    const topFace = results.faceLandmarks[0][10]
    const bottomFace = results.faceLandmarks[0][152]

    const faceDistance = calculateDistance3D(topFace, bottomFace)
    const leftEyeDistance = calculateDistance3D(topLeftEye, bottomLeftEye) * 20 / faceDistance
    const rightEyeDistance = calculateDistance3D(topRightEye, bottomRightEye) * 20 / faceDistance
    const mouthDistance = calculateDistance3D(topMouth, bottomMouth) * 4 / faceDistance
    callback({mouthDistance, leftEyeDistance, rightEyeDistance});
  }

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning) {
    window.requestAnimationFrame(() => predictWebcam(video, faceLandmarker, callback));
  }
}
