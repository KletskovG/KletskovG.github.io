const $ = selector => document.querySelector(selector);

window.onload = () => {
    const isMonday = confirm('Сегодня понедельник?');

    if (isMonday) {
        setCookie('gleb', '0');
        setCookie('misha', '0');
    }

    const mishaHours = getCookie('misha');
    const glebHours = getCookie('gleb');

    const glebWeekTime = $('.glebWeekTime');
    const mishaWeekTime = $('.mishaWeekTime');

    
    const date = new Date();
    const _date = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    const getTimeElement = $('.getTime');
    const firstMishaTime = $('.mishaFirstTime');
    const secondMishaTime = $('.mishaSecondTime');
    const firstGlebTime = $('.glebFirstTime');
    const secondGlebTime = $('.glebSecondTime');

    
    const mishaSaveTime = $('.mishaSaveButton');
    const glebSaveTime = $('.glebSaveButton');
    const finalDate = `${_date}/${month}/${year}`; 

    glebWeekTime.innerHTML += getWeekTime(false);
    mishaWeekTime.innerHTML += getWeekTime(true);

    if (mishaHours === undefined) {
        setCookie('misha', 0);
    }
   

    if (glebHours === undefined) {
        setCookie('gleb', 0);
    }


    firstMishaTime.addEventListener('input', () => {
        secondMishaTime.setAttribute('min', `${firstMishaTime.value}`);
    });


    firstGlebTime.addEventListener('input', () => {
        secondGlebTime.setAttribute('min', `${firstGlebTime.value}`);
    });
    
    getTimeElement.innerHTML = `${finalDate}`;

    mishaSaveTime.addEventListener('click', () => {
        saveMishaTime();
    });

    glebSaveTime.addEventListener('click', (evt) => {
        saveGlebTime();
    });
}

function saveMishaTime() {
    const firstMishaTime = $('.mishaFirstTime').value.split(':');
    const secondMishaTime = $('.mishaSecondTime').value.split(':');
    const firstTimeHours = firstMishaTime[0];
    const secondTimeHours = secondMishaTime[0];

    setCookie('misha', `${+secondTimeHours - +firstTimeHours}`);
    

    $('.mishaWeekTime').innerHTML += getWeekTime(true);
}

function saveGlebTime() {
    const firstGlebTime = $('.glebFirstTime').value.split(':');
    const secondGlebTime = $('.glebSecondTime').value.split(':');
    const firstTimeHours = firstGlebTime[0];
    const secondTimeHours = secondGlebTime[0];


    setCookie('gleb', `${+secondTimeHours - +firstTimeHours}`);

    $('.glebWeekTime').innerHTML += getWeekTime(false);
}

function getWeekTime(isMisha) {
    if (isMisha) return getCookie('misha');
    return getCookie('gleb');
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie
}
