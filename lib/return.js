function Return(ctx, el) {
  ctx.node.innerHTML = "";
  ctx.node.appendChild(el.mount());
  el.render();
}

module.exports = Return;