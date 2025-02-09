import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Definir el modelo Categoria
export const Categoria = db.define(
  "Categoria",
  {
    id_categoria: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
  }
);

export default Categoria;
