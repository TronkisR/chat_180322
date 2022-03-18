//console.log(2)

const API = "https://chat2022.gundegadekena.repl.co"  // nado ukazat svoj !!!!

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');
let vards = document.querySelector('.vards')

    function sutitZinu()
    {
        console.log('sutitZinu() darbojas');

        

        zinas.innerHTML = zinas.innerHTML + '<br /> ' + zina.value;
        fetch(API +'/sutit'+ vards.value + '/' +zina.value)


    }
    
    async function ieladetChataZinas()
    {
        let datiNoServera = await fetch(API + '/lasit');
        let dati = await datiNoServera.text();
        zinas.innerHTML = dati;
    }
    //setInterval( ieladetChataZinas, 1000 )

    async function ieladetChataZinasJson()
    {
        let datiNoServera = await fetch(API + '/lasit');
        let dati = await datiNoServera.json();

        //console.log(await dati[0]['zina'])
        zinas.innerHTML = '';

        i = 0; 
        while ( i < await dati.lenght )
        {
            console.log( i )
            zinas.innerHTML = zinas.innerHTML+dati[i]['zina'];
            i = i + 1;
        }

        zinas.scrollTop = zinas.scrollHeight;
    } // 'seit beidzas funkcija ieladetChataZinasJson'
