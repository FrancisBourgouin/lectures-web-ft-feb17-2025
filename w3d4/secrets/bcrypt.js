const bcrypt = require("bcryptjs")

const salt = bcrypt.genSaltSync(1)
const generatedSalt = "$2a$04$rJDqAfVCv6uNu.L68kEUju"

const somePassword = "hydrogen"
const anotherPassword = "rosa"

const result = bcrypt.hashSync(somePassword, generatedSalt)
const result2 = bcrypt.hashSync(anotherPassword, generatedSalt)

console.log(result)
console.log(result2)
// console.log(salt)