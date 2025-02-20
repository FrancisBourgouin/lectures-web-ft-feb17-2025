// Complex conditions with callbacks!

const grade1 = { subject: "French", score: 91 };
const grade2 = { subject: "Math", score: 80 };


// Expect over 90 in french, 80 everywhere else
const frenchStrictParents = grade => {
  if(grade.subject === "French"){
    return grade.score > 90
  }

  return grade.score > 80
}

// Expect over 60
const chillParents = (grade) => grade.score > 60


// THEY RANDOM!
const randomParents = () => Math.random() > 0.5



const outputParentMessage = (grade, checkIfParentHappy) => {
  if(checkIfParentHappy(grade)){
    console.log("GOOD JOB.")
  } else {
    console.log("I AM DISAPPOINT.")
  }
}

outputParentMessage(grade1, frenchStrictParents)
outputParentMessage(grade2, frenchStrictParents)