const Component = require("../component");
const Node = require("../node");

class Container extends Component {
    constructor({style},..._children) {
      super();
      this.children = _children;
      this.style = style;
    }
  
    mount() {
      Node(this, "div", this.style);
  
      for (let child of this.children) {
          this.node.appendChild(child.mount());
      }
  
      return this.node;
    }
  
    render() {
      for (let child of this.children) {
          child.render();
      }
    }
  }

  module.exports = Container;