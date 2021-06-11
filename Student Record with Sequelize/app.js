const express =  require('express');
const bodyParser =  require('body-parser');

const routes = require('./routes/routes');
const student = require('./models/students');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routes)

student.sync()
       .then((student) => {
        app.listen(3000, () => {
            console.log('Server is listening for requests on port 3000...');
        });
       }).catch(err => console.log(err))





