const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Game = require("./models/GameCategory");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Database

connection
        .authenticate()
        .then(() => {
            console.log("Conexão feita com sucesso!");
        }).catch((erro) => {
            console.log(error);
        })



// ENDPOINT

app.get("/games", (req,res) => {

   Game.findAll({raw: true}).then(games => {
       res.status(200).json(games);
       
   }).catch(err => {
       console.log(err);
   })

});

app.get("/games/:id", (req,res) => {

    let id = parseInt(req.params.id);

    if(isNaN(id)){
        Game.findOne({where: {id: id}}).then(game => {
            res.status(200).json(game);

        }).catch(err => {
            console.log(err);
        })
        
    }else{
        res.status(400).json({message: 'Erro ao recuperar game.'});
    }
});

app.post("/games", (req,res) =>{

    let title = req.body.title;
    let year = req.body.year;
    let price = req.body.price;

    Game.create({
        title,
        year,
        price
    }).then(game => {
        res.status(200).json(game)

    }).catch(err => {
        res.status(400).json(err);
    })
   
});

app.delete("/games/:id", (req,res) => {
    let id = parseInt(req.params.id);

    if(!isNaN(id) && id != undefined){
        Game.destroy({where: {id: id}}).then(() => {
            res.status(200).json({message: 'Excluido com sucesso.'});
        
        }).catch(err => {
            console.log(err);
            res.status(500).json({message: err});
        })
    }
});


app.put("/games/:id", (req,res) =>{
    let id = parseInt(req.params.id);
    let title = req.body.title;
    let year = req.body.year;
    let price = req.body.price;
    
    Game.update({title, year, price}, {where: {id:id}}).then(() =>{
        res.status(200).json({message: "Atualizado com sucesso."});
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: err});
    })

});


app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000");
})
