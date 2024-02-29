const {response} = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
      msg:'get API - Controlador '
    });
  }

 const usuariosPut = (req, res = response) => {
    res.json({
      msg:'put API - controlador'
    });
  }

 const usuariosPost = (req, res = response) => {
    
    const body = req.body;
    res.json({
      msg:'post API - usuariosPost',
      body
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
      msg:'delete API'
    });
  }
  
  const usuarioPatch =(req, res = response) => {
    res.json({
      msg:'patch API'
    });
  }

  module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuarioPatch
  }