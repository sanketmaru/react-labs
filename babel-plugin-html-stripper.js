'use strict'; Object.defineProperty(exports, "__esModule", {value: true});
// export default declare((api, options) => {
// });
exports.default = function(babel) {
  const { types: t } = babel;
  
    return {
      name: "ast-transform", // not required
      visitor: {
        ClassMethod(path) {
          if (path.node.key.name.endsWith("_mobile")) {
            path.remove();
          }
        },
        JSXElement(path) {
          path.node.openingElement.attributes.forEach(ele => {
            if (ele.name.name === "data-mobile")
              path.remove();
          });
        }
      }
    };
}
