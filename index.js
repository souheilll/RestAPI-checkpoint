require('dotenv').config({ path: './config/.env' });
//console.log(process.env)
const cors = require('cors');
const port = process.env.Port || 7000;
const connectDb = require('./config/connectDb');
const express = require('express');
const userRoute = require('./Routes/userRoute');


const app = express()
//server creation
app.listen(port, (e) => {
    if (e) {
        console.log('server failed');
    }
    else {
        console.log(`server is running on ${port}`);
    }
})

//connected to db
connectDb();

/*cross origin resource sharing 
It is a mechanism to allow or restrict 
requested resources on a web server depend on where the HTTP request was initiated
*/
app.use(cors())
// recognize the incoming Request Object as a JSON Object
app.use(express.json());

//
app.use('/api', userRoute);




