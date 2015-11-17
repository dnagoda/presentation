// EVERYTHING IS AN OBJECT
var thing = {}
thing.question = 'Am I think 1 or thing 2?'
console.log(thing)
console.log(typeof thing)
console.log(thing instanceof Object)

// EXCEPT FOR SOME OF THE THINGS
var number = 42
console.log(number)
console.log(typeof number)
console.log(number instanceOf Object)
// BUT, MOSTLY THEY ACT LIKE OBJECTS
console.log(number.toString())

// FUNCTIONS ARE FIRST CLASS
function firstClass() {
  return "I'm first class!";
}

function callIt(func) {
  return func();
}

console.log(callIt(firstClass));

// LEXICAL SCOPING
var deal = "real";

function lexicallySpeaking() {
  return deal + " value";
}

console.log(lexicallySpeaking())

// ES6 BLOCK SCOPE VARIABLES
if (true) {
    var hoistMe = "How rude!";
    let notMe = "Safe inside my block.";
}

console.log(hoistMe)
console.log(notMe)

// CLOSURES
function foo() {
    var fooVar = "hidden from global scope, unless...";

    function bar() {
        return fooVar;
    }

    return bar;
}

var func = foo()

console.log(func());

// SPREAD/REST OPERATOR
(function(...args) {
    console.log(args);
})(1, 2, 3);

(function(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest instanceof Array);
})(1, 2, 4, 5, 6);

// DEFAULT ARGUMENTS
(function(x, y = 10) {
    console.log("x is " + x);
    console.log("y is " + y);
})();

var initialX = 1;
var initialY = function() { return initialX * 2; };

(function(x = initialX, y = initialY()) {
    console.log("x is " + x);
    console.log("y is " + y);
})();

// DESTRUCTURING
var a, b, c;
function foo() {
    return [1, 2, 3];
}
[a, b, c] = foo();
console.log(c + ' ' + b + ' ' + a);

function bar() {
  return {
    name: {
        first: "Dave",
        last: "Nagoda"
    }
  };
}

var {name: {first: firstName}} = bar();
console.log(firstName);

// ES6 CLASSES
class Route {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.didClimb = false;
  }
  climb() {
    this.didClimb = true;
  }
}

var route = new Route('Warpath', 'v14');
route.climb();
console.log(route);

class AlpineRoute extends Route {
  constructor(name, difficulty, mountain) {
    super(name, difficulty)
    this.mountain = mountain;
  }
  climb() {
    super.climb();
    this.climbDate = new Date();
  }
}

var alpineRoute = new AlpineRoute('Mont Blanc', '5.12', 'Alps');
alpineRoute.climb();
console.log(alpineRoute);