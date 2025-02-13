import Sequelize from "sequelize";
import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Rol from "./rol.js";

const Usuario= db.define('usuarios',{
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {timestamps: false,});

Rol.hasOne(Usuario, {
    foreignKey: {
        name: "id_rol",
    },
});

Usuario.belongsTo(Rol, {
    foreignKey: {
        name: "id_rol",
    },
});

export default Usuario;