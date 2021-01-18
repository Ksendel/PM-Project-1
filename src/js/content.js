const conf = {
    currency: CURRENCY,
    currency_exchange: CURRENCY_EXCHANGE,
    basket: BASKET,
    topMenu: TOP_MENU,
    menu: MENU,
    news: NEWS,
    banner: BANNER,
    items: ITEMS
}
// TOP_MENU *
$(function () {

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
    let topMenuLength = Object.keys(conf.topMenu).length
    let amountMenu = Math.min(9, topMenuLength)

    const menuList = document.querySelector('.menu-list')

    // for (let i = 0; i < amountMenu; i++) {
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
    for (const [submenuItem, submenuConf] of Object.entries(conf.topMenu)) {

        let submenu = ""
        if (submenuConf.submenu) {
            const submenuItem = submenuConf.submenu
                .sort((a, b) => a.order - b.order)
                .map(menuItem => `<li><a href="${menuItem.url}">${menuItem.title}</a></li>`)
                .reduce((a,b) => a + b)

            submenu += `<ul class="submenu">${submenuItem}</ul>`
        }
        document
            .querySelector(`#${topMenuItem(submenuConf.order)}`)
            .innerHTML += submenu
    }

    //BASKET *
    const basketClass = document.querySelector('.hdr__bottom-basket')
    // const money = conf.currency === 'UAH' ? 'грн.' : 'р.'
    let currency = ""
    switch (conf.currency) {
        case "UAH": currency = 'грн.'
            break
        case "RUB": currency = 'р.'
            break
        default: currency = "у.e."
    }

    basketClass.innerHTML += ` 
                        <a class="hdr__bottom-basket-link" href="#">
                            <img class="hdr__bottom-basket-img" src="images/ico_cart.svg" alt="">
                            <p class="hdr__bottom-basket-text">Корзина</p>
                            <p>
                                <span class="hdr__bottom-total-products">${conf.basket.elements}</span> /
                                <span class="hdr__bottom-total-price">${conf.basket.price}</span>${currency}
                            </p>
                        </a>
              `


    //TOP_MENU - BURGER MENU *
    const burgerMenuList = document.querySelector('.burger-menu')
    for (const [menuItem, menuConf] of Object.entries(conf.topMenu)) {
        burgerMenuList.innerHTML += `
        <li><a href="${menuConf.url}">
            ${menuConf.title}
            </a>
        </li>
    `
    }

    // MENU *
    const rangeMenuList = document.querySelector('.assortmentMenu-list')
    for (const [menuItem, menuConf] of Object.entries(conf.menu)) {
        rangeMenuList.innerHTML += `
        <li class="assortmentMenu-list-item">
                <div>${menuConf.title}</div>
        </li>
    `
    }

    // NEWS *
    const newsList = document.querySelector('.news-list')
    let newsRandom = shuffle(conf.news)
    const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    for (const [menuItem, menuConf] of Object.entries(newsRandom)) {
        let date = menuConf.date.slice(-2)
        let monthNum = Number(menuConf.date.slice(5, 7))

        newsList.innerHTML += `
         <li><a href="" class="img">
                    <img src="${menuConf.img}" class="backup_picture" alt="${menuConf.title}" >
                    <div class="news-date">
                        <div>${date}</div>
                            ${month[monthNum - 1]}
                    </div>
                    <div class="news-p">
                        <a href="">${menuConf.title}</a>
                        ${menuConf.description}
                    </div>
                </a></li>
    `
    }


// BANNER *
    const bannerList = document.querySelector('.banner-box__slider')

    for (const [menuItem, menuConf] of Object.entries(conf.banner)) {
        bannerList.innerHTML += `
         <div class="banner-box__slider-item">
                    <img src="${menuConf.img}" class="backup_picture2" alt="${menuConf.url}" >
                    <a class="banner-box__slider-link" href="#">Подробнее</a>
         </div>
    `
    }

})

function shuffle(array) {
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
