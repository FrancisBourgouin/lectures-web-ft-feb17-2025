const bcrypt = require("bcryptjs")

const generateUserHelpers = (users, salt) => {
  // users is available in this scope!

  const getUserByEmail = (email) => {
    const user = users[email];

    if (!user) {
      return { error: "User not found", user: null };
    }

    return { error: null, user };
  };

  const authenticateUser = (email, password) => {
    const user = users[email];

    if (!user) {
      // Check for user existence
      return { error: "User not found", user: null };
    }

    const isSamePassword = bcrypt.compareSync(password, user.password)

    if (!isSamePassword) {
    // if (user.password !== password) {
      // Check for password
      return { error: "Wrong password for user", user: null };
    }

    return { error: null, user };
  };

  const createUser = (userInfo) => {
    const user = users[userInfo.email];
    const invalidFields = [];

    if (user) {
      // Check for user existence
      return { error: "User already exists", user: null };
    }

    for (const key of Object.keys(userInfo)) {
      if (!userInfo[key]) {
        invalidFields.push(key);
      }
    }

    if (invalidFields.length > 0) {
      return { error: `The fields ${invalidFields} are invalid`, user: null };
    }

    const newId = Object.keys(users).length + 1;

    const newUser = {
      id: newId,
      name: userInfo.name,
      email: userInfo.email,
      // password: userInfo.password,
      password: bcrypt.hashSync(userInfo.password, salt),
      secret: userInfo.secret,
    };

    users[newUser.email] = newUser;

    return { error: null, user: newUser };
  };

  return { getUserByEmail, authenticateUser, createUser }
};


module.exports = generateUserHelpers;
