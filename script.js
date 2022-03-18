//console.log(2)

const API = "https://chat2022.gundegadekena.repl.co"  // nado ukazat svoj !!!!

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');

    function sutitZinu()
    {
        console.log('sutitZinu() darbojas');

        

        zinas.innerHTML = zinas.innerHTML + '<br /> ' + zina.value;
        fetch(API +'/sutit'+vards.value+'/'+zina.value)


    }
    
    async function ieladetChataZinas()
    {
        let datiNoServera = await fetch('chatazinas.txt');
        let dati = await datiNoServera.text();
        zinas.innerHTML = dati;
    }
    setInterval( ieladetChataZinas, 1000 )
