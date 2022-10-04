import {Router} from 'express';
import { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } from '../controllers/usuarios.controller.js';

export const router = Router();
 
        //debemos cambiar el ('/') porque el middleware ya lo esta usando
        router.get('/', usuariosGet );
        router.post('/', usuariosPost);
        router.put('/:id', usuariosPut); //se le pone :nombreQueLeQueremosDar en este caso id
        router.patch('/', usuariosPatch);
        router.delete('/', usuariosDelete);
