const createUser = (thieves, newThiefData) => {
  const newId = Object.values(thieves).length + 1;

  const newThief = {
    id: newId,
    name: newThiefData.name,
    email: newThiefData.email,
    password: newThiefData.password,
    imagePath: newThiefData.imagePath,
  };

  const isInvalidThief =
    Object.values(newThief).filter((value) => value === "").length > 0;

  if (isInvalidThief) {
    return { error: "Empty field", data: null };
  }

  thieves[newThief.email] = newThief;

  return { error: null, data: newThief };
};

const thief1 = {
  id: 1,
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  password: "tophat",
  imagePath: "/arsene.gif",
};

const thief2 = {
  id: 2,
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "rosa",
  imagePath: "/doug.webp",
};

const thieves = {
  "gentleman@cambrioleur.com": thief1,
  "pontiac@bandit.com": thief2,
};


const result = createUser(thieves, {name:"bob", email:"bob@bob.com", password:"", imagePath:"diojwdijwd"})

console.log(result, thieves)