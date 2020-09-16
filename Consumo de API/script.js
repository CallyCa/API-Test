var axiosConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`
    }
}

function main(){
    axios
        .get('http://localhost:3000/games', axiosConfig)
        .then((response) => {
            let games = response.data;
            let lista = document.getElementById('games');
            games.forEach((game) => {
                let item = document.createElement('li');

                // Adiciona campos customizados pra lisa

                item.setAttribute('data-id', game.id);
                item.setAttribute('data-title', game.title);
                item.setAttribute('data-year', game.year);
                item.setAttribute('data-price', game.price);

               // --
                item.innerHTML = `${game.id} - ${game.title} - R$ ${game.price}`;
                let deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = 'Deletar';
                deleteBtn.addEventListener('click', () => {
                    deleteGame(item);
                });

                let editBtn = document.createElement('button');
                editBtn.innerHTML = 'Editar';
                editBtn.addEventListener('click', () => {
                    loadForm(item);
                });
                
                deleteBtn.setAttribute("class", "btn btn-danger");
                editBtn.setAttribute("class", "btn btn-success");
                item.appendChild(deleteBtn);
                item.appendChild(editBtn);
                lista.appendChild(item);
            });

        }).catch((err) => {
            console.log(err);
        })
}

main();


function cadastro(){
    let titleInput = document.getElementById('title');
    let yearInput = document.getElementById('year');
    let priceInput = document.getElementById('price');

    let game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value,
    };

    axios
        .post('http://localhost:3000/games', game, axiosConfig)
        .then(() => {
            window.location.reload();

        }).catch((err) => {
            console.log(err);
        });
}

function deleteGame(listItem){
    let id = listItem.getAttribute('data-id');
    axios
        .delete(`http://localhost:3000/games/${id}`, axiosConfig)
        .then(() => {
            window.location.reload();

        }).catch((err) => {
            console.log(err);
        });
}


function loadForm(listItem) {
    let id = listItem.getAttribute('data-id');
    let title = listItem.getAttribute("data-title");
    let year = listItem.getAttribute("data-year");
    let price = listItem.getAttribute("data-price");

    // pegando os inputs

    let idField = document.getElementById("idEdit");
    let titleField = document.getElementById("titleEdit");
    let yearField = document.getElementById("yearEdit");
    let priceField = document.getElementById("priceEdit");

    // atribuindo valor aos inputs

    idField.value = id;
    titleField.value = title;
    yearField.value = year;
    priceField.value = price;
  }

  function atualizar() {
    let idField = document.getElementById("idEdit").value;
    let titleField = document.getElementById("titleEdit").value;
    let yearField = document.getElementById("yearEdit").value;
    let priceField = document.getElementById("priceEdit").value;

    let game = {
     
      title: titleField,
      year: yearField,
      price: priceField
    }
    
    axios.put(`http://localhost:3000/games/${idField}`, game, axiosConfig).then(() => {
      window.location.reload();

    }).catch((err) => {
        console.log(err);
    })

}