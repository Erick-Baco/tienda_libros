
const renderizarSearch = async(req, res) => {
    const search = req.body.query;
    res.render("busqueda/search");
}

export{
    renderizarSearch
}