const app = require('./app');
const connectDataBase = require('./config/database');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');

// confige
dotenv.config({ path: 'backend/config/.env' });

// DATABASE
connectDataBase();



// ERRORHANDLER
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`server is working on http://localhost:${process.env.PORT}`);
});
