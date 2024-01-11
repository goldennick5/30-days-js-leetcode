const original = {
  name: "Almaty",
  age: 54,
};

const handler = {
  get: function(target, prop) {
      if(prop === 'age') {
          return target[prop] + " years old";
      } else return target[prop];
  },
  set: function(target, prop, value) {
      if(prop === 'age' && typeof value !== 'number') {
          throw new TypeError("Age is not a number");
      } else target[prop] = value;

      if(prop === 'name' && typeof value !== 'string') {
          throw new TypeError("Name is not a string");
      } else target[prop] = value;
  },
};

const s = new Proxy(original, handler);

s.name = "Aruuuzhaaan";
s.age = 456;

console.log(s);
