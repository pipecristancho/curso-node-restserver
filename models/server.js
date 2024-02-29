const express = require('express');
const cors = require('cors');

class Server{
    
    constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    // middlewares
    this.middlewares();

    //rutas de mi aplicacion
    this.routes();
    }

    middlewares(){
      //directorio publico
      this.app.use(cors());
      this.app.use(express.static('public'));
      this.app.use(express.json());
    }

    routes() {
      this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen (){
       this.app.listen(this.port,()=> {
            console.log('servidor corriendo en el puerto', this.port);
            
        });
    }

}

module.exports = Server;
