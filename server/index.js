
import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import template from '../src/template';

const app = express();

// Serving static files
//app.use('/assets', express.static(path.join(__dirname, '../assets')));
//app.use('/media', express.static(path.join(__dirname, '../media')));

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
  items: data
}

//SSR function import
const ssr = require('../views/server');

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./assets/index.html'), 'utf8', (err, html) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    
    const { preloadedState, content } = ssr(initialState)
    
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    return res.send(
      html.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>`
      )
    )
  })
}

app.get('/', serverRenderer)

// server rendered home page
/*app.get('/', (req, res) => {
  const { preloadedState, content } = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});*/

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});


