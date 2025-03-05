# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Object: Easy to access a specific key
Array: Easy to loop over the content


```js
const thievesArr = [thief, thief];
const thievesObj = { 1: thief, 2: thief }; // Better choice!
```

## Seed

```jsx

const thief1 = {
  id:"1",
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat",
  imagePath:"/arsene.gif"
}

const thief2 = {
  id:"2",
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"/doug.webp"
}

const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}

```

## Structure

### Helpers!

#### fetchUserByEmail

```js
// Either return an object, or string
const fetchUserByEmail = (email) => {
  const thief = thieves[email]

  if(thief){
    return {error:null, data:thief}
  }

  return {error:"No thief found!", data:null}
}

const {error, data} = fetchUserByEmail("bob@bob.com")

```

#### authenticateUser

```js
const authenticateUser = (email, password) => {
  const thief = thieves[email]

  if(!thief){
    return {error:"HEY NO THIEF!", data:null}
  }

  if(thief.password !== password){
    return {error:"BAD PASSWORD", data:null}
  }

  return {error:null, data:thief}
}
```

#### createUser

```js

```

### HTML
