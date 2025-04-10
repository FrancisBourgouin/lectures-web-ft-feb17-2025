- Unit Testing: Testing a singular element (a unit) function, component
- Feature Testing: Testing multiple elements (a chain) (helper => api => helper)
- Integration testing: Similar to feature testing, we test the integration of multiple elements
- End to end testing: Testing pipelines (user stories)

# Jest

- Test runner
- Coverage (How much code in a project is being tested)
- Built in API for testing ( expect() )
- Watching by default
- Causes pain (jk)
- Made for code (helper functions)

# React Testing Library

- Test React components
- render() then choose between getBy, queryBy, findBy
  - getBy : Try to find an element, and will throw an error if it doesn't find it
    getByText("Page Title")
    expect(getByText("Page Title")).toBeInTheDocument()

  - queryBy : Try to find an element, and will return null if it doesn't find it
    queryByText("Page Title") not enough
    expect(queryByText("Page Title")).not.toBeInTheDocument()

  - findBy : Same as getBy, but will have a grace period, asynchronous (by default wait for 1s)

# Cypress

We'll see !

Weather app ?

- Search for a city, get weather
- Search for a city, a button with the name of the city (history)


# Tests

When a user loads the website, use the input field to search for a city, 
click on search and then the results should show up if the city is valid

When a user loads the website, use the input field to search for a bad city, 
click on search and then the result should be an error message about city not existing, add a sarcastic wow

When a user loads the website, use the input field to search for a city, 
click on search and then a button with the city name should appear, no more than once


When a user loads the website, use the input field to search for a city, 
click on search and then the results should show up if the city is valid.

Use the input field to search for a city again, 
click on search and then the results should show up if the city is valid.

Use the city button to fetch the weather for the previous city