
const renderizarSearch = async(req, res) => {
    const search = req.body.query;
    console.log(search)
    res.render("busqueda/search");
}

export{
    renderizarSearch
}