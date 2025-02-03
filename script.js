// a első kártyában lévő elemek
const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const elso = document.getElementById('elso');

// a második kártyában lévő elemek
const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');
const masodik = document.getElementById('masodik');

// művelet kártyában lévő gombok kiemelése class alapján
const muveletek = document.getElementsByClassName('muvelet');
//console.log(muveletek[1]);

// eredmény divet is elmentjük egy változóba
const eredmeny = document.getElementById('eredmeny');

// --- események ---

elsoMinusz.addEventListener('click', () => {
    elso.textContent = Number(elso.textContent) - 1;
});

elsoPlusz.addEventListener('click', () => {
    elso.textContent = Number(elso.textContent) + 1;
});

masodikMinusz.addEventListener('click', () => {
    masodik.textContent = Number(masodik.textContent) - 1;
});

masodikPlusz.addEventListener('click', () => {
    masodik.textContent = Number(masodik.textContent) + 1;
});

// esemény hozzáadása minden egyes műveleti jelhez
for (let i = 0; i < muveletek.length; i++) {
    //console.log(muveletek[i]);
    muveletek[i].addEventListener('click', () => {
        if (muveletek[i].textContent === '+') {
            console.log('összeadás');
            eredmeny.textContent = Number(elso.textContent) + Number(masodik.textContent);
        } else if (muveletek[i].textContent === '-') {
            console.log('kivonás');
            eredmeny.textContent = Number(elso.textContent) - Number(masodik.textContent);
        } else if (muveletek[i].textContent === '×') {
            console.log('szorzás');
            eredmeny.textContent = Number(elso.textContent) * Number(masodik.textContent);
        } else if (muveletek[i].textContent === '÷') {
            console.log('osztás');
            if (Number(masodik.textContent) === 0) {
                eredmeny.textContent = '0-val nem osztunk!';
            } else {
                // eredmeny.textContent = Math.round((Number(elso.textContent) / Number(masodik.textContent)) * 100) /100;
                eredmeny.textContent = (Number(elso.textContent) / Number(masodik.textContent)).toFixed(2);
            }
        } else {
            console.log('nincs ilyen művelet');    
        }
    });
}