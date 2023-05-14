// bem规范
// block 代码块 element 元素 modifier 修饰符 state 状态
// z-button
// z-button__element
// z-button__element--modifier
// z-checked is-disabled

//前缀名字 z-button-box__element--modifier
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string) =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string) =>
    modifier ? _bem(prefixName, "", "", modifier) : "";

  const be = (blockSuffix: string = "", element: string = "") =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string = "", modifier: string = "") =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string = "", modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (
    blockSuffix: string = "",
    element: string = "",
    modifier: string = ""
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";
  const is = (name: string, state) => (state ? `is-${name}` : "");
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}

function createNamespace(name: string) {
  const prefixName = `z-${name}`;
  return createBEM(prefixName);
}

const Bem = createNamespace("button");
console.log(Bem.b("box"));
console.log(Bem.e("element"));
console.log(Bem.m("modifier"));
console.log(Bem.be("box", "element"));
console.log(Bem.bm("box", "modifier"));
console.log(Bem.em("element", "modifier"));
console.log(Bem.bem("box", "element", "modifier"));
console.log(Bem.is("disabled", true));