"use strict";

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var scripts = '';

  if (content) {
    scripts = " <script>\n                   window.__STATE__ = ".concat(JSON.stringify(initialState), "\n                </script>\n                <script src=\"assets/client.js\"></script> \n                ");
  } else {
    scripts = " <script src=\"assets/bundle.js\"> </script> ";
  }

  var page = "<!DOCTYPE html>\n              <html lang=\"en\">\n              <head>\n                <meta charset=\"utf-8\">\n                <title> ".concat(title, " </title>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n                <!--Materialize Icons-->\n                <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n                \n              </head>\n              <body>\n                <div class=\"content\">\n                   <div id=\"app\" class=\"wrap-inner\">\n                      <!--- magic happens here -->  ").concat(content, "\n                   </div>\n                </div>\n                  ").concat(scripts, "\n                  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n              </body>\n              </html>\n              ");
  return page;
}

module.exports = template;