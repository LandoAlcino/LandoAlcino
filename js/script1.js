class Nome{
    constructor(){
        this.id =1;
        this.arrayNomes = [];
    
    }

    salvar () {
        let nome1 = this.lerDados();
        if (this.validaCampos(nome1) == true) {
            
            this.adicionar(nome1);
          
        }
        this.listatabela();
    }
    listatabela() {
        let tbody = document.getElementById ('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayNomes.length; i++ ) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_ações = tr.insertCell();

            td_nome.innerText = this.arrayNomes[i].nomeid;
            td_idade.innerText = this.arrayNomes[i].idade;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/botao-editar.png';

            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/excluir.png';


            td_ações.appendChild(imgEdit);
            td_ações.appendChild(imgDelet);
        

        }
    }
    adicionar(){
        this.arrayNomes.push(nome1);
        this.id++;

    }

    lerDados(){

       let nome1 = {}

       nome1.nomeid = document.getElementById("nome2").value;
       nome1.idade = document.getElementById("idade").value;

       return nome1;

    }
    validaCampos() {
        let msg = '';

        if(nome.nomeid == '') {
            msg += 'Informe seu nome \n' 
        }

        if(nome.idade == '' ) {
            msg += 'Informe sua idade \n'
        }
        if(msg != '' ) {
            alert(msg);
            
            return false
        }
        return true;

    }

    cancelar (){
        alert ("Vamos excluir seu dados");

    }

}
var nome = new Nome();