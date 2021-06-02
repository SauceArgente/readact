# Redact

A React knockoff ? Probably

A React knockoff with a ui structure similar to flutter ? Definitely

## Structure

A component is a class containing 2 major functions :

    -Mount
    -Render

### Mount

Mount is where you initialize the actual node in which the component will be located
eg :       
```js
mount() {
    Node(this, "div", this.style);
    return this.node;
}
```

The node helper function will :

    -Create a new HTML node
    -Take the Class' context and set the class.node variable to the newly create node
    -Return the node 

### Render

The mount function is the actual place where you define the ui structure of your component

eg :       
```js
  render() {
    Return(
      this,
      new Row(
        new Paragraph("Hello", this.state.username),
        new Paragraph("Bye", this.state.username)
      )
    );
  }
}
```

The return helper function will :

    -Reset the content of the parent node of the component
    -Mount the component passed as the second parameter
    -Render the component passed as the second parameter

## Difference between Stateless and Stateful components

A stateful widget will actually update whenever one of it's state changes

(In order to make state handling literally take one line of code you just need to make your component inherit from the Component class and intitialize it with super() in the constructor)

Where a stateless widget will just not update since it doesn't have any state.

eg Stateful :
```js
class MainUI extends Component {
  constructor() {
    super();
  }

  mount() {
    this._state.username = "Sawcce";

    setTimeout(() => {
        this.state.username = 100;
    }, 2000);

    return Node(this, "div", "full-screen");
  }

  render() {
    Return(
      this,
      new Row(
        new Paragraph("Hello", this.state.username),
        new Paragraph("Bye", this.state.username)
      )
    );
  }
}
```

eg Stateless : 
```js
class Text {
    constructor(...args, {type,style}) {
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
```

### Render your first app with Readact

For this demo I used Rollup to bundle the app into the iife format

(Ended up taking approximately 140 lines of code with nicely formatted code)

```js
const { Component, Node, Return, Builtins } = require("readact");

const Text = Builtins.Text;
const Container = Builtins.Container;

class MainUI extends Component {
  constructor() {
    super();
  }

  mount() {
    this._state.username = "user";

    setTimeout(() => {
      this.state.username = "world";
    }, 2000);

    return Node(this, "div", "full-screen");
  }

  render() {
    Return(
      this,
      new Container(
        {},
        new Text({ type: "p" }, "Hello", this.state.username),
        new Text({ type: "p" }, "wait 10 seconds"),
        new Text({ type: "p" }, "Bye", this.state.username)
      )
    );
  }
}

let UI = new MainUI();

document.body.appendChild(UI.mount());
UI.render();
```