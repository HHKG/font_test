import { transformVom } from "./util";
const React = {
  createElement: function (type, config, children) {
    const props = {
      ...config,
      key: "是我的react",
    };
    console.log(arguments, "arguments");
    if (arguments.length > 3) {
      props.children = Array.prototype.slice
        .call(arguments, 2)
        .map(transformVom);
    } else {
      props.children = transformVom(children);
    }
    return { type, props };
  },
};
export default React;
