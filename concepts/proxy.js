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



const Store = {
    array: [],
    isLoading: false,
}

const proxiedStore = new Proxy(Store, {
    set(target, property, newValue) {
        target[property] = newValue;
        if(property === 'array') {
            window.dispatchEvent(new Event("app-array-has-been-changed"));
        }
        if(property === 'isLoading') {
            window.dispatchEvent(new Event("app-isLoading-has-been-changed"));
        }
        return true;
    }
});
