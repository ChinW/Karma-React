var context = require.context('./src', true, /(spec|test)\.js$/i);
context.keys().forEach(context);