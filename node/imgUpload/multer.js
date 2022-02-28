const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
// multer storage config
const storage = multer.diskStorage({
    destination: (request, file, cb)  => {
        cb(null, 'uploads/')
    },

    // changing the filename and adding the extension
    filename: (request, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    } 
})

const upload = multer({ storage });

// upload route /imgup
// get the img field in a multipart/form-data request
app.post('/imgup', upload.single('img'), (request, response) => {
    console.log("file name: " + JSON.stringify(request.file))
    
    response.send('Success!');
});

app.listen(3000, () => {
    console.log('upload route: localhost:3000/imgup');
});
