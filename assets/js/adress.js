let urunlerForms = document.querySelector('.form-group');
let urunListesi = document.querySelector('.urun-listesi');
let resetButton = document.querySelector('.reset');
let sepet = document.querySelector('.sepet');

let urunlerLocal = [];

if(typeof localStorage.urunlerLocal !== 'undefined') {
    urunlerLocal =JSON.parse(localStorage.urunlerLocal);
    renderSubmitForm();
}

function handleSubmitForm(e) {
    e.preventDefault();

    let formdata = new FormData(urunlerForms);
    let formobj = Object.fromEntries(formdata);
    urunlerLocal.push(formobj)

    urunlerForms.reset();
    renderSubmitForm();
    save();
}

urunlerForms.addEventListener('submit', handleSubmitForm);

function save() {
    localStorage.urunlerLocal = JSON.stringify(urunlerLocal);
}

function renderSubmitForm() {
    urunListesi.innerHTML = '';
    
    for(let i = 0; i < urunlerLocal.length; i++) {
        urunListesi.innerHTML += `<li> ${urunlerLocal[i].isim} ${urunlerLocal[i].katagori} ${urunlerLocal[i].renk} ${urunlerLocal[i].fiyat} <button class="sepete-ekle">sepete ekle</button> </li>`
    }
}


let sepeteEkleButton = document.querySelector('.sepete-ekle');

function sepeteEkleUrunu(e) {
    e.preventDefault();

    //BURASI OLMADI
}

sepeteEkleButton.addEventListener('click', sepeteEkleUrunu);



function reset() {
    localStorage.clear();
    urunlerLocal = [];
    renderSubmitForm();
}

resetButton.addEventListener('click', reset);