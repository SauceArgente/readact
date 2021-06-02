const Node = require("../node");

class Text {
    constructor( {type,style},...args) {
      this.text = args.join(" ");
      this.type = type;
      this.style = style;
    }
  
    mount() {
      Node(this, this.type, this.style);
      return this.node;
    }
  
    render() {
      this.node.innerHTML = this.text;
    }
}

module.exports = Text;