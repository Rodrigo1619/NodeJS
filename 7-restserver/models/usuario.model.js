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
//quitarnos el __v y el password
UsuarioSchema.methods.toJSON = function(){ //cuando se ejcute el toJSON se ejecutara la funcion
    //se saca el --v y contraseña y se unifica en usuario y retornamos ese valor de usuario
    const {__v, contraseña, ...usuario} = this.toObject();
    return usuario
}
export default model('Usuario', UsuarioSchema);