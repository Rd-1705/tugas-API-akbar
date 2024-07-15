// fetch('https://backend-arya-git-main-hanafiahlubis-projects.vercel.app/api/motorcycle-akbar-hidayat');

// let q = input dari form seacrh

const api = 'https://backend-arya-git-main-hanafiahlubis-projects.vercel.app/api/motorcycle-akbar-hidayat';

fetch(api)
    .then((response) => response.json())
    .then((res) => {
        // console.log(res)
        res.map((a) => {
            const main = document.querySelector('.content');
            const figure = document.createElement('figure');
            const figcaption = document.createElement('figcaption');
            const image = document.createElement('img');
            // image.src = a.image
            image.setAttribute('src', a.image);
            const title = document.createElement('h2');
            title.innerText = a.name;
            const price = document.createElement('h3');
            price.innerText = a.price;
            const button = document.createElement('button');
            button.textContent = 'Selengkapnya';

            button.addEventListener('click', function () {
                localStorage.setItem('motor', JSON.stringify(a))
                window.location.href = "../html/detail.html";
            });

            console.log(button)
            figcaption.appendChild(title);
            figcaption.appendChild(price);
            figcaption.appendChild(button);
            figure.appendChild(image);
            figure.appendChild(figcaption);
            main.appendChild(figure);

        })
    })

let start = 0;
otomatis();

function otomatis(){
    const slider = document.querySelectorAll('.slide');
    // console.log(slider);

    for (let i = 0; i < slider.length; i++){
        slider[i].style.display='none';
    }
    if(start >= slider.length){
        start = 0;
    }
    slider[start].style.display='block';
    start++;
    setTimeout(otomatis, 2000);
}





// fetch(api)
// .then((response) => response.json())
// .then((res) => {
//     console.log(res)
//     res.forEach((res) => {
//         card(res);
//     });
// });

// function card(res) {
//     const main = document.querySelector('.content');
//     const img = document.createElement('img');
//     // img.src = res.image
//     img.setAttribute('src',res.image)
//     main.appendChild(img);
// }