"use strict";

function template2() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var scripts = " <script>\n                    window.__STATE__ = ".concat(JSON.stringify(initialState), "\n                  </script>");
  var page = " ".concat(content, "\n                <br/>   \n                ").concat(scripts, "\n              ");
  return page;
}

module.exports = template2;