var Express 	= require('Express');
var bodyParser 	= require('body-parser');
var Cors		= require('cors');
var router      = Express.Router();
var DoctorRoute	= require('./Doctor/doctor.route');

var app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());
app.use('/', DoctorRoute);

app.listen('8081', '127.0.0.1', function(err) {
    if(err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listen on port 8081");
})