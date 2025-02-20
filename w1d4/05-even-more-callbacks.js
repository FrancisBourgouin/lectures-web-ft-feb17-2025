// Inline callbacks

const forEachElement = (list, doSomething) => {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    doSomething(element, i, list);
  }
};

const someList = ["Yukon Gold", "Fingerling", "Irish Cobbler", "Russett"];
const yellPotatoName = (name) => console.log(name.toUpperCase());

forEachElement(someList, yellPotatoName)

// The Array with no name
forEachElement(["Yukon Gold", "Fingerling", "Irish Cobbler", "Russett"], yellPotatoName);

// The Function with no name
// Anonymous functions
forEachElement(someList, (name) => console.log(name.toUpperCase()));

forEachElement(someList, (name) => console.log(`Good morning ${name}`));

forEachElement(someList, function (name) {
  console.log(`Good morning ${name}`);
});


someList.forEach(yellPotatoName)