
// / Error ReferenceError: XMLHttpRequest is not defined Error ReferenceError:
// / fetch is not defined  am erorebs migdebs erts gavasworeb shemdeg documentis
/// reference erors migdebs agar vici ra movuxerxo. tqveni kodi gadmovwere bolo
/// leqciis dasatestad... etyoba softwareshi maqvs problema



function getUsers(){

    function render(){
        let response = this.responseText;
        let responseData = JSON.parse(response)
        console.log(responseData);

        let ul = document.createElement('ul');

        responseData.data.foreach(item =>{
            let li = document.createElement('li')
            li.textContent = item.first_name

            ul.appendChild(li);
        })
        document.getElementById('api').appendChild(ul)
    }

    let requist = new XMLHttpRequest();

    requist.addEventListener('load', render);

    requist.open("GET",'https://reqres.in/api/users?page=1')
    requist.send();
}

getUsers();

