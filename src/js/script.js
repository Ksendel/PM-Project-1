$(function init() {
    topMenu();
    menu();
    news();
    banner();
    items();
    promotions();

})

const conf = {
    currency: CURRENCY,
    currency_exchange: CURRENCY_EXCHANGE,
    basket: BASKET,
    topMenu: TOP_MENU,
    menu: MENU,
    news: NEWS,
    banner: BANNER,
    items: ITEMS,
    promotions: PROMOTIONS
}

let currency = ""

switch (conf.currency) {
    case "UAH":
        currency = 'грн.'
        break
    case "RUB":
        currency = 'р.'
        break
    default:
        currency = "у.e."
}

// -----TOP_MENU---- //
function topMenu() {

    renderBasket(currency)

    const menuDivider = `
        <div class="menu-divider">
            <div class="menu-divider__block"></div>
            <div class="menu-divider__block"></div>
            <div class="menu-divider__block"></div>
            <div class="menu-divider__block"></div>
            <div class="menu-divider__block"></div>
            <div class="menu-divider__block"></div>
        </div>
    `
    const menuList = document.querySelector('.menu-list')

    const topMenuItem = order => `top-menu-item-${order}`
    const topMenuTitle = (menuConf) => `
                <a href="${menuConf.url || ""}" class="menu__link">
                    ${menuConf.title}
                    ${menuDivider}
                </a>
            `

    const maxTopMenuItemsLength = 9
    Object.entries(conf.topMenu).slice(0, maxTopMenuItemsLength).forEach(entry => {
        const [_, topMenuEl] = entry
        if (topMenuEl.title && topMenuEl.order) {
            menuList.innerHTML += `
                <li id="${topMenuItem(topMenuEl.order)}">
                    ${topMenuTitle(topMenuEl)}
                </li>
             `
            if (topMenuEl.submenu) {
                document.querySelectorAll('.menu__link').forEach(el => el.classList.add('menu__link_view'))
            }
        }
    })

    //TOP_MENU - SUBMENU *
    for (const [_, submenuConf] of Object.entries(conf.topMenu)) {

        let submenu = ""
        if (submenuConf.submenu) {
            const submenuItem = submenuConf.submenu
                .sort((a, b) => a.order - b.order)
                .map(menuItem => `<li><a href="${menuItem.url}">${menuItem.title}</a></li>`)
                .reduce((a, b) => a + b)

            submenu += `<ul class="submenu">${submenuItem}</ul>`
        }
        document
            .querySelector(`#${topMenuItem(submenuConf.order)}`)
            .innerHTML += submenu
    }

    //TOP_MENU - BURGER MENU *
    const burgerMenuList = document.querySelector('.burger-menu')
    for (const [_, menuConf] of Object.entries(conf.topMenu)) {
        burgerMenuList.innerHTML += `
        <li><a href="${menuConf.url}">
            ${menuConf.title}
            </a>
        </li>
    `
    }
}
// -----TOP_MENU END---- //

// -----MENU---- //
function menu() {

    const rangeMenuList = document.querySelector('.assortmentMenu-list')
    const maxMenuItemsLength = 10
    Object.entries(conf.menu).slice(0, maxMenuItemsLength).forEach(entry => {
        const [_, menuEl] = entry
        if (menuEl.title && menuEl.url) {
            rangeMenuList.innerHTML += `
             <li class="assortmentMenu-list-item">
                <div>${menuEl.title}</div>
             </li>
            `
        }
    })
}
// -----MENU END---- //

// -----NEWS----- //
function news() {

    const shuffle = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    const newsList = document.querySelector('.news-list')
    let newsRandom = shuffle(conf.news)
    const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    for (const [_, menuConf] of Object.entries(newsRandom)) {
        let date = new Date(menuConf.date).getDate()
        let getMonth = new Date(menuConf.date).getMonth()
        let monthNum = month[getMonth]

        newsList.innerHTML += `
         <li><a href="" class="img">
                    <img src="${menuConf.img}" class="backup_picture" alt="${menuConf.title}" >
                    <div class="news-date">
                        <div>${date}</div>
                            ${monthNum}
                    </div>
                    <div class="news-p">
                        <a href="">${menuConf.title}</a>
                        ${menuConf.description}
                    </div>
                </a>
         </li>
    `
    }
}
// -----NEWS END----- //

// -----BANNER----- //
function banner() {
    const bannerList = document.querySelector('.banner-box__slider')

    for (const [_, menuConf] of Object.entries(conf.banner)) {
        bannerList.innerHTML += `
         <div class="banner-box__slider-item">
                    <img src="${menuConf.img}" class="backup_picture__slider" alt="${menuConf.url}" >
                    <a class="banner-box__slider-link" href="#">Подробнее</a>
         </div>
    `
    }
}
// -----BANNER END----- //

// -----ITEMS----- //
function items() {
    const newsItemsList = document.querySelector('.new-items__body')
    const recItemsList = document.querySelector('.rec__body')
    const saleItemsList = document.querySelector('.sale__body')

    conf.items
        .sort((item1, item2) => {
            const dateCompared = new Date(item2.date).getTime() - new Date(item1.date).getTime()
            if (dateCompared === 0) {
                const priceCompared = item1.price - item2.price
                if (priceCompared === 0) {
                    return (item1.oldPrice - item1.price) - (item2.oldPrice - item2.price)
                } else return priceCompared
            } else return dateCompared
        })
        .forEach(itemsEl => {
            const price = itemsEl.currency === conf.currency ?
                itemsEl.price :
                itemsEl.price * conf.currency_exchange[itemsEl.currency]
            const oldPrice = itemsEl.currency === conf.currency ?
                itemsEl.oldPrice :
                itemsEl.oldPrice * conf.currency_exchange[itemsEl.currency]

            if (itemsEl.type === 'new') {
                newsItemsList.innerHTML += `
            <div class="carousel-item">
                <img src="${itemsEl.img}" class="ni-img backup_picture__items" alt="">
                <a href="" class="item">${itemsEl.description}</a>
                <div class="buy-p">Цена:
                    <span class="sale">${price} ${currency}</span>
                    <span class="price">${oldPrice}  ${currency}</span>
                </div>
                    <div class="buy-b">
                    <button class="buy-button" onclick="buy(${price}, '${currency}')">
                        <img src="images/buy.png" class="buy-img" alt="">
                            Купить
                    </button>
                    <a href="" class="buy-a">Подробнее</a>
                </div>
            </div>`

            } else if (itemsEl.type === 'recommended') {

                recItemsList.innerHTML += `
            <div class="carousel-rec">
                <img src="${itemsEl.img}" class="ni-img backup_picture__items" alt="">
                <a href="" class="item">${itemsEl.description}</a>
                <div class="buy-p">Цена:
                    <span class="sale">${price}  ${currency}</span>
                    <span class="price">${oldPrice}  ${currency}</span>
                </div>
                    <div class="buy-b">
                    <button class="buy-button" onclick="buy(${price}, '${currency}')">
                        <img src="images/buy.png" class="buy-img" alt="">
                            Купить
                    </button>
                    <a href="" class="buy-a">Подробнее</a>
                </div>
            </div>`

            } else if (itemsEl.type === 'sale') {
                saleItemsList.innerHTML += `
            <div class="carousel-sale">
                <img src="${itemsEl.img}" class="ni-img backup_picture__items" alt="">
                <a href="" class="item">${itemsEl.description}</a>
                <div class="buy-p">Цена:
                    <span class="sale">${price} ${currency}</span>
                    <span class="price">${oldPrice} ${currency}</span>
                </div>
                    <div class="buy-b">
                    <button class="buy-button" onclick="buy(${price}, '${currency}')">
                        <img src="images/buy.png" class="buy-img" alt="">
                            Купить
                    </button>
                    <a href="" class="buy-a">Подробнее</a>
                </div>
            </div>`
            }
        })


}

function buy(price, currency) {
    console.log('click')
    conf.basket.elements += 1
    conf.basket.price += price
    renderBasket(currency)
}

// -----ITEMS END----- //

// ----BASKET---- //

function renderBasket(currency) {

    const basketClass = document.querySelector('.hdr__bottom-basket')
    const elements = !(conf.basket.elements) ? 0 : conf.basket.elements

    basketClass.innerHTML = ` 
                        <a class="hdr__bottom-basket-link" href="#">
                            <img class="hdr__bottom-basket-img" src="images/ico_cart.svg" alt="">
                            <p class="hdr__bottom-basket-text">Корзина</p>
                            <p>
                                <span class="hdr__bottom-total-products">${elements}</span> /
                                <span class="hdr__bottom-total-price">${conf.basket.price}</span>${currency}
                            </p>
                        </a>
              `
}

// ----BASKET END---- //

// -----PROMOTIONS---- //
function promotions() {
    const promotionsItemsList = document.querySelector('.shares__body')
    for (const [_, menuConf] of Object.entries(conf.promotions)) {

        const periodRegexp = /^([0-9]{1,2})d\s([0-9]{1,2})h\s([0-9]{1,2})m$/
        const formatDuration = duration => duration.toString().length === 1 ? '0' + duration : duration
        const [days, hours, minutes] = periodRegexp
            .exec(menuConf.time_action)
            .slice(1,4)
            .map(formatDuration)

        promotionsItemsList.innerHTML += `
         <div class="carousel-shares">
                        <a href="" class="item-sh">${menuConf.title}</a>
                        <img src="${menuConf.img}" class="ni-img backup_picture__promotions" alt="">

                        <div class="sh-p">${menuConf.description}
                        </div>
                        <div class="timer__body">
                            Срок действия:
                            <div class="timer-sh">
                                <div class="days">
                                    <span>${days[0]}</span><span>${days[1]}</span>
                                    <p>дней</p>
                                </div>
                                <span class="timer">:</span>
                                <div class="hours">
                                    <span>${hours[0]}</span><span>${hours[1]}</span>
                                    <p>часов</p>
                                </div>
                                <span class="timer">:</span>
                                <div class="minutes">
                                    <span>${minutes[0]}</span><span>${minutes[1]}</span>
                                    <p>минут</p>
                                </div>
                            </div>
                        </div>
                        <a href="" class="buy-a">Подробнее</a>
                    </div>
    `
    }
}
// -----PROMOTIONS END---- //
