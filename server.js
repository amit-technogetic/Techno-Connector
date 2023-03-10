const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

// connect Database
connectDB();
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
// Init middleware
app.use(express.json({ extended : false}));


app.use('/api/users' , require('./routes/api/users'));
app.use('/api/posts' , require('./routes/api/posts'));
app.use('/api/profile' , require('./routes/api/profile'));
app.use('/api/auth' , require('./routes/api/auth'));

app.get('/', (req,res) => {
    res.send("Api Running");
})

