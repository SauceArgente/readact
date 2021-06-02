function Node(ctx, type, _class) {
  let node = document.createElement(type);
  node.className = _class;
  ctx.node = node;
  return node;
}

module.exports = Node;