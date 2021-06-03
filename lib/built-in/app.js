const Node = require("../node");
const Return = require("../return");

class App {
  constructor({ stylesheet, title }, child) {
    this.stylesheet = stylesheet;
    this.title = title;
    this.child = child;
  }

  mount() {
    // Body
    const body = document.createElement("body");
    this.node = body;

    // Head
    const styles = document.createElement("style");
    styles.innerHTML = this.stylesheet;

    const title = document.createElement("title");
    title.innerHTML = this.title || "Awesome Readact";

    document.body = body;
    document.head.appendChild(styles);
    document.head.appendChild(title);

    this.render();

    return this.node;
  }

  render() {
    Return(this, this.child);
  }
}

module.exports = App;
