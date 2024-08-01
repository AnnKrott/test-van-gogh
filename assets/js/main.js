const cards = [
    {
        sale: true,
        img: 'assets/images/cards/1.jpg',
        subtitle: 'Встраиваемый светильник Markt',
        newPrice: 3490,
        oldPrice: 5060,
        link: '#'
    },
    {
        sale: false,
        img: 'assets/images/cards/2.jpg',
        subtitle: 'Линейный светильник ARG',
        newPrice: 6700,
        oldPrice: 0,
        link: '#'
    },
    {
        sale: true,
        img: 'assets/images/cards/3.jpg',
        subtitle: 'Светодиодный светильник ',
        newPrice: 5060,
        oldPrice: 6060,
        link: '#'
    },
    {
        sale: false,
        img: 'assets/images/cards/1.jpg',
        subtitle: 'Встраиваемый светильник Markt',
        newPrice: 3490,
        oldPrice: 0,
        link: '#'
    },
    {
        sale: true,
        img: 'assets/images/cards/2.jpg',
        subtitle: 'Линейный светильник ARG',
        newPrice: 6700,
        oldPrice: 6060,
        link: '#'
    },
    {
        sale: false,
        img: 'assets/images/cards/3.jpg',
        subtitle: 'Светодиодный светильник ',
        newPrice: 5060,
        oldPrice: 0,
        link: '#'
    },
    {
        sale: true,
        img: 'assets/images/cards/1.jpg',
        subtitle: 'Встраиваемый светильник Markt',
        newPrice: 3490,
        oldPrice: 5060,
        link: '#'
    },
    {
        sale: false,
        img: 'assets/images/cards/2.jpg',
        subtitle: 'Линейный светильник ARG',
        newPrice: 6700,
        oldPrice: 0,
        link: '#'
    },

]

const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("ru")
    return formatter.format(price)
}

const cardsHTML = document.querySelector('.cards');
cardsHTML.innerHTML = '';

cards.forEach((card) => {
    cardsHTML.insertAdjacentHTML('beforeend', `
    <div div class="card" >
    ${card.sale ? '<div class="card__sale">Акция</div>' : ''}
    <img class="card__img" src="${card.img}" alt="">

        <h3 class="card__subtitle subtitle">${card.subtitle}</h3>
        <div class="card__price">
            <p class="card__price--discount ${card.sale ? '' : 'price-black'}">${formatPrice(card.newPrice)} &#8381;</p>
            ${card.sale ? `<p class="card__price--old">${formatPrice(card.oldPrice)} &#8381;</p>` : ''}
        </div>

        <div class="card__more">
            <a class="card__link" href="${card.link}">Подробнее</a>
        </div>

    </div>
`)
})




// burger

const menuBtn = document.querySelector('.menu');
const headerMobile = document.querySelector('.header--mobile');
const body = document.querySelector('body')
const menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerMobile.classList.toggle('active');
    body.classList.toggle('active');
})




