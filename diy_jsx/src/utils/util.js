const REACT_TEXT = Symbol("REACT_TEXT");

export function transformVom(element) {
  console.log(element, "element");
  if (typeof element === "string" || typeof element === "number") {
    return { type: REACT_TEXT, props: { content: element } };
  }
  return element;
}
