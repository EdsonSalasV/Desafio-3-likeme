const {pool} = require('./conexion')

const getPosts = async() =>{
    const results = await pool.query('SELECT * FROM posts')
    console.log(results.rows)
    return results.rows
}

const agregarPost =async (titulo, img, descripcion, likes) => {
        const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)"
        const values = [titulo, img, descripcion, likes]
        const result = await pool.query(consulta,values);
        console.log('post agregado')
        return result    
}

getPosts()

module.exports = {
    getPosts,
    agregarPost
}