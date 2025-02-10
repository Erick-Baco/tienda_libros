/* import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Definir el modelo LibroCategoria
export const Libros_Categorias = db.define(
  "Libros_Categorias",
  {
    id_libro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "libros",
        key: "id_libro",
      },
    },
    id_categoria: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "categorias",
        key: "id_categoria",
      },
    },
  },
  {
    tableName: "libros_categorias",
    timestamps: false,
  }
);

export default Libros_Categorias;
 */
