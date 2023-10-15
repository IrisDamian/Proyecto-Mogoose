const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/Peliculas_db";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((er) => console.log("No se pudo conectar a MongoDB", er));

const peliculasSchema = mongoose.Schema({
  titulo: String,
  director: String,
  anio: Number,
});

const peliculaModel = mongoose.model("colecciones", peliculasSchema);

//LEER

const mostrar = async () => {
  const colecciones = await peliculaModel.find();
  console.log(colecciones);
};

//crear

const crear = async () => {
  const pelicula = new peliculaModel({
    titulo: "Súpercool",
    director: "Greg Mottola",
    anio: "2007",
  });
  const resultado = await pelicula.save();
};

//ACTUALIZAR

const actualizar = async (id) => {
  const pelicula = await peliculaModel.updateOne(
    { _id: id },
    {
      $set: {
        titulo: "El padrino MODIFICADO",
        director: "FRANCIS FORD MODIFICADO",
      },
    }
  );
};

//ELIMINAR

const eliminar = async (id) => {
    const pelicula = await peliculaModel.deleteOne({_id: id})
    console.log(pelicula)
}

//eliminar('652ae3c0a3bd2d8d98486231')
//actualizar('652a111c1ebf6472c50283ed')
//crear()
//mostrar()
