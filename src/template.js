function template(title, initialState = {}, content = "") {
  let scripts = '';

  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script> 
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <!--Materialize Icons-->
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                  ${scripts}
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
              </body>
              </html>
              `;

  return page;
}

module.exports = template;