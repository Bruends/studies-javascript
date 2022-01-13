const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

// configurando storage do multer
const storage = multer.diskStorage({
    destination: (request, file, cb)  => {
        cb(null, 'uploads/')
    },

    // novo nome do arquivo com a extensão
    filename: (request, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    } 
})

const upload = multer({ storage });

// rota de upload
// espera o campo 'img' em uma request do tipo multpart/form-data
app.post('/imgup', upload.single('img'), (request, response) => {
    console.log("file name: " + JSON.stringify(request.file))
    const fileExtension = request.file.originalname.split(".")[1];

    
    response.send('Success!');
});

app.listen(3000, () => {
    console.log('upload route: localhost:3000/imgup');
});