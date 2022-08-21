const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3005/api', 'http://localhost:3005/users', 'http://localhost:3005/library'],
    credentials: true,
    optionSuccessStatus: 200,
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
   
}

module.exports = corsOptions