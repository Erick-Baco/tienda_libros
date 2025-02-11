import session from "express-session";

const authAdmin = (req, res, next) =>{

    // console.log("Id Rol " + req.session.user.id_rol); // Id Rol 1 - Id Rol 2 - Id Rol Undefined
    
    const user = req.session.user
    const id_rol = user.id_rol
    
    if(id_rol == 1){
        return next()
    }
    
    return res.redirect("/home")
}

export {authAdmin}