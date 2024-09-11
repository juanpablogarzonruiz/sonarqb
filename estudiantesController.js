class EstudiantesController{
    construct(){
    }
    
    ingresar(req,res){
        try{
            const myJSON = JSON.stringify(req.body);
            console.log ("la información que llega es " + myJSON );
            const {nombres} = req.body;
            res.status(201).json({id: "Registro exitoso....5.0"});

        }catch (err){
            res.status(500).send(err.message);
        }
    }
}

module.exports = new EstudiantesController();
