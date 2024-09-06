//console.log(dados[2]);
//console.log(dados);
//console.log(dados[2].titulo);
//console.log(dados);

function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");
   // console.log(section);
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
    //console.log(campoPesquisa)
    
    if (campoPesquisa ==""){
        section.innerHTML = "<p>Nada foi encontrado. Voê precisa digitar alguma coisa</>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) || 
            tags.includes(campoPesquisa)){

            resultados +=
            `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2> 
                    <p class="descricao-meta"> ${dado.descricao}</p>
                    <a href=${dado.link} target= "_blank">Mais informações</a>
                </div>
            `
            }
        }
       // console.log(dado.titulo.includes(campoPesquisa))
   
       if (!resultados) {
           resultados = "<p>Nada foi encontrado</p>"
        } 
       
    section.innerHTML = resultados
}

















//section.innerHTML = `
//<div class="item-resultado">
//    <h2>
//        <a href="#" target="_blank">${dados[0].titulo}</a>
//    </h2> 
//    <p class="descricao-meta"> 
//        Rebeca Andrade é uma das maiores ginastas da história do Brasil...                                   </p>
//    <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">Mais informações</a>
//</div>
//`

//section.innerHTML = `
//<div class="item-resultado">
//   <h2>
//        <a href="#" target="_blank">${dados[0].titulo}</a>
//    </h2> 
//    <p class="descricao-meta"> 
//        Rebeca Andrade é uma das maiores ginastas da história do Brasil...                                   </p>
//    <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">Mais informações</a>
//</div>
//`
