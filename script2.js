// változókba szervezünk minden elemet, amiket fel szeretnénk használni
const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const elso = document.getElementById('elso');
const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');
const masodik = document.getElementById('masodik');
const muveletek = document.getElementsByClassName('muvelet');
const eredmeny = document.getElementById('eredmeny');

// a minusz és plusz gombokat tömbösítjük
const gombok = [
    { elem: elsoMinusz, celpont: elso, elteres: -1 },
    { elem: elsoPlusz, celpont: elso, elteres: 1 },
    { elem: masodikMinusz, celpont: masodik, elteres: -1 },
    { elem: masodikPlusz, celpont: masodik, elteres: 1 }
];

// a számok növelése és csökkentése 1-el függvény meghatározása
const updateValue = (celpont, elteres) => {
    celpont.textContent = Number(celpont.textContent) + elteres;
}

// minden gombra beállítunk egy klikk esemény figyelőt
gombok.forEach(gomb => {
    gomb.elem.addEventListener('click', () => updateValue(gomb.celpont, gomb.elteres));
});

// műveletek gombokra is beállítunk egy esemény figyelőt, ami a klikk lesz
console.log(muveletek);
Array.from(muveletek).forEach(muvelet => {
    muvelet.addEventListener('click', () => {
        const a = Number(elso.textContent);
        const b = Number(masodik.textContent);
        let c;

        switch (muvelet.textContent) {
            case '+':
                c = a + b;
                break;
            case '-':
                c = a - b;
                break;
            case '×':
                c = a * b;
                break;
            case '÷':
                // if (b === 0) {
                //     c = '0-val nem leeht osztani'
                // }
                // else{
                //     c = (a / b).toFixed(2);
                // }

                c = b === 0 ? '0-val nem osztunk' : c = (a / b).toFixed(2);


                break;
            default:
                c = "Nincs ilyen művelet";
        }

        eredmeny.textContent = c;
    });
});



//Osama Bin Laden