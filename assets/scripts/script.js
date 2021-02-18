const arrayOfImages = [
    "cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9", "cat10", "cat11", "cat12",
    "cat13", "cat14", "cat15", "cat16", "cat17", "cat18"
];


const arrayOfFakta = [
    "Kucing peliharaan tertua yang diketahui ada 9.500 tahun yang lalu",
    "Kucing menghabiskan 70 persen hidupnya untuk tidur",
    "Seekor kucing menjadi walikota sebuah kota di Alaska selama 20 tahun",
    "Rekor kucing terpanjang yang pernah ada adalah 48,5 inci",
    "Kucing terkaya di dunia memiliki 7 juta poundsterling",
    "Pada tahun 1963 seekor kucing pergi ke luar angkasa",
    "Orang Mesir kuno akan mencukur alisnya saat kucing mereka mati",
    "Kucing rumahan berbagi 95,6 persen genetik mereka dengan harimau",
    "Kucing rumahan dapat mencapai kecepatan hingga 30mph"
];

function generateImage() {
    const random = parseInt(Math.random() * arrayOfImages.length);
    let randomImages = arrayOfImages[random];
    document.querySelector('#catImage').setAttribute('src', '../assets/images/' + randomImages + '.jpg')
}

function generateFakta(jumlah) {
    document.getElementById('batasFakta').innerHTML = ''
    let number = 1
    // let newElement = document.createElement('p');
    // newElement.innerHTML = arrayOfFakta[1]
    // newElement.setAttribute('class', 'mt')
    // document.getElementById("batasFakta").appendChild(newElement)
    // let batas = document.querySelector('#batasFakta')
    // let test1 = document.newElement.innerText(arrayOfFakta[1])
    // console.log(batas);
    // node = arrayOfFakta[1]
    // let test = batas.appendChild(newElement)
    // console.log(test1);
    let batas = document.getElementById("batasFakta")
    for (let i = 0; i < jumlah; i++) {
        let newElement = document.createElement('p');
        newElement.innerHTML = number + '. ' + arrayOfFakta[i]
        newElement.setAttribute('class', 'mt')
        newElement.setAttribute('id', 'fakta' + (i + 1))
        batas.appendChild(newElement)
        batas = document.getElementById("fakta" + (i + 1))
        number += 1
    }
    let batasFaktaUnik = document.getElementById('fakta' + jumlah)
    let source = document.createElement('p')
    source.innerHTML = `detail dan sumber <a href="https://www.kompas.com/homey/read/2021/01/05/113100376/14-fakta-menarik-tentang-kucing-di-dunia?page=all"
    target="__blank">kompas.com</a>`
    source.setAttribute('class', 'mt')
    source.setAttribute('style', 'font-style: italic')
    batasFaktaUnik.appendChild(source)



}