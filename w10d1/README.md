# Rails Review

- Review Rails by building a project
- Existential questions

## Opinions



## Rebuild of TinyApp: You can (not) refactor

### Planning

Since we're using an existing project (User stories, Mockups, Data structures, etc)

```jsx
   const urlDatabase = {
      "shortUrl":{
         longUrl:"",
         shortUrl:"",
         userId:""
      }
   }

   const users = [
      {
         id:"",
         email:"",
         name:"",
         password:""
      }
   ]
```

### Steps

- Review the structures and routes of the project

Users => Create / New / View my user
Urls => Add, View, Edit, Delete, Browse => BREAD
Sessions => Create, Delete

`rails generate scaffold Model ...`


- Rails version of TinyApp, gathering phase!

Authentication in Rails: https://gist.github.com/thebucknerlife/10090014
Generate short urls (b2xvn2) : https://stackoverflow.com/questions/88311/how-to-generate-a-random-string-in-ruby
Bootstrap in Rails: https://medium.com/@xnjiang/how-to-install-bootstrap-in-rails-7-f7a04bf9a7e3


- Action plan!

- Create a rails app
- Create the users (rails generate scaffold User name email password)
- Cleanup unneeded routes from the scaffold (list all users)
- Create the authentication (rails generate authenticaton)
- Clean up unwanted
- Create the urls (rails generate scaffold Url short_url long_url description user:belongs_to)
- Clean up the unwanted
- Update the relationship in the models between Url and User
- Update the controller to generate automatically a shortUrl
- Make it fancy!
- ...
- Profit!