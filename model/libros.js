import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Definir el modelo Libro
export const Libro = db.define(
  "Libro",
  {
    id_libro: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    imagen: {
      type: Sequelize.STRING,
    },
    autor: {
      type: Sequelize.STRING,
    },
    editorial: {
      type: Sequelize.STRING,
    },
    ISBN: {
      type: Sequelize.STRING,
      unique: true,
    },
    precio: {
      type: Sequelize.DECIMAL(10, 2),
    },
    stock: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "libros",
    timestamps: false,
  }
);

export default Libro;
