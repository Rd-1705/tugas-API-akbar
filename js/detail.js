const produc = JSON.parse(localStorage.getItem('motor'));
let id = produc.id;
function produk(id) {
    fetch(`https://backend-arya-git-main-hanafiahlubis-projects.vercel.app/api/motorcycle-akbar-hidayat/${id.toString()}`)
        .then((response) => response.json())
        .then((res) => {
            changeCard(res);
            // console.log(res);
        });
}

function changeCard(res) {
    const image = document.querySelector('img');
    image.setAttribute("src", res.image);

    const h2 = document.querySelector('h2');
    h2.innerText = res.name;

    const desc = document.querySelector('p');
    desc.textContent = res.desc;

    localStorage.setItem('motor', JSON.stringify(res));
}

function card() {
    const main = document.querySelector('.products');
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const image = document.createElement('img');
    image.setAttribute('src', produc.image);
    const title = document.createElement('h2');
    title.innerText = produc.name;
    const price = document.createElement('h3');
    price.innerText = produc.price;
    const descContainer = document.createElement('div');
    descContainer.className = 'desc';
    
    const properties = [
        "Tipe Mesin", "Diameter x Langkah", "Volume Langkah", "Perbandingan Kompresi", 
        "Daya Maksimum", "Torsi Maksimum", "Kopling", "Starter", "Busi", 
        "Sistem Bahan Bakar", "Transmisi", "Sistem Pengapian"
    ];
    
    properties.forEach(prop => {
        const p = document.createElement('p');
        p.textContent = `${prop}: ${produc.desc[prop]}`;
        descContainer.appendChild(p);
    });
    
    figcaption.appendChild(title);
    figcaption.appendChild(price);
    figcaption.appendChild(descContainer);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    main.appendChild(figure);
}
card();

