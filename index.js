const express = require('express');
const port = (8000);
const adress = (`http://localhost:${port}`);
const contacts = require('./router/contacts.routes');
const middleware = require('./Middlewares/middleware');

const app = express();

//Configs:
    //Middlewares:
        app.use(middleware);
    //Routes:
        app.use(contacts);

app.listen(port, () => {console.log(`🚀 Server is running in url ${adress}`)});