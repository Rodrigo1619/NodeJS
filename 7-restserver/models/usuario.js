import {Schema, model} from "mongoose";

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'Nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'Correo es obligatorio'],
        unique: true
    },
    contraseña:{
        type: String,
        required: [true, 'Contraseña es obligatoria'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
        emun: ['ADMIN_ROL', 'USUARIO_ROL']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{ //si fue creado por gugul o no
        type: Boolean,
        default: false
    }
})
export default model('Usuario', UsuarioSchema);