import {Router} from 'express';
import { check } from 'express-validator';
import { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } from '../controllers/usuarios.controller.js';

export const router = Router();
 
        //debemos cambiar el ('/') porque el middleware ya lo esta usando osea se debe dejar vacio
        router.get('/', usuariosGet );
        //si se mandan solo 2 argumentos se entiende que es ruta y controlador pero si se mandan 3 se entiende que el de en medio es el middleware y se manda como un arreglo
        //el check es para validar que sea y tenga la forma de un correo, para no estar haciendo el monton de expresiones regulares y tener mas limpio el codigo
        router.post('/',[check('correo', 'Correo invalido').isEmail()] ,usuariosPost);
        router.put('/:id', usuariosPut); //se le pone :nombreQueLeQueremosDar en este caso id
        router.patch('/', usuariosPatch);
        router.delete('/', usuariosDelete);
