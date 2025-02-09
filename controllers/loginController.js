const renderizarLogin = async (req, res) => {
    res.render("login/log");
}

const logear = async (req, res) => {
    res.redirect("/home");
}

export{
    renderizarLogin,
    logear
}