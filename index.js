const btn_search = document.querySelector('#btn');
        const btn_limpar = document.querySelector('#btn_limpar')
        const cam_log = document.querySelector('#logradouro');
        const cam_loc = document.querySelector('#localidade');
        const cam_bai = document.querySelector('#bairro');
        const cam_UF= document.querySelector('#UF');

        const prenche_camp = data =>{  
            cam_log.value = data.logradouro
            cam_loc.value = data.localidade
            cam_bai.value = data.bairro
            cam_UF.value = data.uf
        }
        btn_limpar.addEventListener('click',()=>{
            cam_log.value = '';
            cam_loc.value = '';
            cam_bai.value = '';
            cam_UF.value = '';
            const cep = document.querySelector('#cep').value = '';
        })

        btn_search.addEventListener('click',()=>{
            const cep = document.querySelector('#cep').value
            if(cep == '') return alert('Preencha o campo do CEP');
            let cep_string = String(cep);
            if(cep_string.length != 8)return alert('número inválido, o CEP possui 8 caractéres');

            fetch(`https://viacep.com.br/ws/${cep}/json/`,{method:'GET',mode:"cors",cache:"default"}).then((response)=>{
                return response.json()

            }).then((data)=>{
                const dados = data;
                prenche_camp(data);
            }).catch((err)=>new Error(err))
        })



























// const numeros = num =>{
//     return  new Promise ((resolve,reject) => {
//          if(num % 2 ==0) resolve(num)
//          reject(new Error('ih deu ruim'))
//          .then(data=>{
//              resolve(data)
//          }).catch(err=>{
//              reject(new Error(err))
//          })
//     })
// }
// console.log(numeros(3))

// const p = new Promise((resolve,reject)=> {
//     const nome = 'Caio'
//     if(nome === 'Caio')resolve()
//     reject(new Error('deu ruim '))
// })
// p.then((data)=>{
//     console.log('o nome é  '+ data)
// }).catch((err)=>console.log(err))










// const pega_arquivo = caminho => {
//     const encondig = 'utf-8';
//     fs.promises.readFile(caminho,encondig)
//     .then(texto => console.log(texto))
//     .catch(err => tratar_erro(err))
// }

// const pega_arquivo = caminho =>{
//     const enconding = 'utf-8'
//     fs.readFile ( caminho , enconding , ( err , data ) => { 
//         if(err)tratar_erro(err)      
//         console.log(chalk.blue(data)) 
//     })
// }
const tratar_erro = (erro) =>{
    throw new Error(chalk.red(erro))
}

// console.log(p)