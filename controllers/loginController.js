import Usuario from "../model/usuario.js"
import session from "express-session";


const renderizarLogin = async (req, res) => {
    res.render("login/log");
}

const logear = async (req, res) => {
    try {

        const correo = req.body.email;
        const password = req.body.password;
        
        try {
            
            const user = await Usuario.findOne({where:{correo}})    
            const isPassword = user.contrasena == password
            // console.log(isPassword); // true or false

            
            if(!user || !isPassword){
                // En caso de que algun campo no coincida
                res.render("login/log");
            }
            // Inicio de sesion validado
            else{
                const id_rol = user.id_rol;
                // console.log(id_rol); // 1(Admin) - 2(User)
                
                // VARIABLE DE SESSION
                req.session.user = {user: user, id_rol: id_rol}; // Guardar usuario en sesión
                console.log(req.session.user);
                
                if(id_rol == 2){
                    res.redirect("/home")
                }else if(id_rol == 1){
                    res.redirect("/admin/crearLibro");
                }


            }

        // Si se ingresan dos campos los cuales no se encuentran en la base de datos
        } catch (error) {
            res.render("login/log");
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}
    


export{
    renderizarLogin,
    logear
}