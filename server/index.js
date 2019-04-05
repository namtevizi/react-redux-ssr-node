
import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../src/redux/configureStore'
import App from '../src/App'

const app = express();

const STATIC_OPTIONS = {
	maxAge: 31536000000 // One year
};

app.use('/assets', express.static('assets', STATIC_OPTIONS));
app.use('/media', express.static('media', STATIC_OPTIONS));

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const data = require('../assets/data.json');

let initialState = {
  isFetching: false,
  items: data,
  addedItems: [],
  total: 0
}

const store = configureStore(initialState)

app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const indexFile = path.resolve('./assets/index.html');
  fs.readFile(indexFile, 'utf8', (err, html) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    res.setHeader('Cache-Control', 'assets, max-age=604800')
    return res.send(
      html.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    );
  });
});
