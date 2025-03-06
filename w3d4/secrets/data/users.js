const dotenv = require("dotenv")
dotenv.config()

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password:"$2a$04$rJDqAfVCv6uNu.L68kEUjuRi9HA8G4v0dASJjqI/Db0iSSFG14Lyi",
  secret: process.env.USER_1_SECRET,
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "$2a$04$rJDqAfVCv6uNu.L68kEUjuYciR9ME9Fv3u8lDUWAPBIpj3XVSY5ra",
  secret: process.env.USER_2_SECRET,
};

const users = { "periodic@table.com": user1, "pontiac@bandit.com": user2 };

module.exports = users



