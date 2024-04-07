const Express = require('express');
const app = Express();



app.use(Express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/aboutUs.html', (req, res) => {
    res.sendFile(__dirname + '/aboutUs.html');
});
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit', (req, res) =>{
    const nombre = req.body.nombre;
    const correo = req.body.email;

    console.log(`nombre: ${nombre}`);
    console.log(`correo: ${correo}`);
    res.send('datos enviados correctamente')
})


app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})