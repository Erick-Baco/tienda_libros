/* import { Sequelize } from "sequelize";

import Libro from "./libros.js";
import Categoria from "./categorias.js";
import Libros_Categorias from "./libros_categorias.js";

Libros_Categorias.belongsTo(Libro, { foreignKey: "id_libro" });
Libro.hasMany(Libros_Categorias, { foreignKey: "id_libro" });

Categoria.hasMany(Libros_Categorias, { foreignKey: "id_categoria" });
Libros_Categorias.belongsTo(Categoria, { foreignKey: "id_categoria" });

export { Libro, Categoria, Libros_Categorias };
 */
