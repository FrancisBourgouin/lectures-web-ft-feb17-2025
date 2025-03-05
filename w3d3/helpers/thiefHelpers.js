const fetchUserByEmail = (thieves, email) => {
  const thief = thieves[email];

  if (thief) {
    return { error: null, data: thief };
  }

  return { error: "No thief found!", data: null };
};

const authenticateUser = (thieves, email, password) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "HEY NO THIEF!", data: null };
  }

  if (thief.password !== password) {
    return { error: "BAD PASSWORD", data: null };
  }

  return { error: null, data: thief };
};

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

module.exports = { fetchUserByEmail, authenticateUser, createUser };
