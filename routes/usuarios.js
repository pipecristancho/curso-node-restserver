const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuarioPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);   

router.put('/', usuariosPut ); 

router.post('/',usuariosPost); 

router.delete('/',usuariosDelete); 

router.patch('/',usuarioPatch ); 

module.exports = router;