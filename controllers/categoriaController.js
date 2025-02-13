
const renderizarLibrosCategoria = async(req, res) => {
    const categoria = req.params.categoria;
    res.render("busqueda/categoria");
}

export{
    renderizarLibrosCategoria
}