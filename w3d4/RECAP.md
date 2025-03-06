# Hardening your server!

## Encrypted cookies (w/ cookie-session)

Replace cookie-parser with cookie-session when it comes to sensitive information

req.cookies => req.session (read)

res.cookie("name", value) => req.session.name = value

- Treat req.session like a normal object

## Hash a password (w/ bcryptjs)

Hashed password cannot reveal the original password since it's a one way conversion

Important in case of accidental info being shown to the public

Compare the hashed string to the password with the compare method of bcrypt

- You can use compareSync / hashSync / genSaltSync

## Use environment files (w/ .env + dotenv)

Main fail point of a lot of projects, make sure that sensitive info is not shared on github

Env files stores sensitive info, make sure to have a .gitignore file to not share the .env
