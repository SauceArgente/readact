class Component {
  constructor() {
    let stateHandler = {
      get: (obj, prop, receiver) => {
        return obj[prop];
      },

      set: (obj, prop, newval) => {
        obj[prop] = newval;
        this.render();
        return true;
      },
    };

    this._state = {};
    this.state = new Proxy(this._state, stateHandler);
  }

  render() {}
}

module.exports = Component;