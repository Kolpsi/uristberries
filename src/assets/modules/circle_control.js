// создание круга
// document.querySelector('.circle').innerHTML = "листать вниз - листать вниз - листать вниз".split('')
//     .map((e, i) => `<span class="circle-span" style="--rot:${i*12}deg">${e}</span>`).join('');


    function createCircle (circle, circleText, deg) {
        document.querySelector(circle).innerHTML = circleText.split('')
    .map((e, i) => `<span class="circle-span" style="--rot:${i*deg}deg">${e}</span>`).join('');

    }

    createCircle('.circle', 'листать вниз - листать вниз - листать вниз', 12)
    createCircle('.circle-nabotov', 'оперативное и стратегическое управление компанией', 7.34)
    createCircle('.circle-astahov', 'руководство отделом юридической защиты', 9,47)
    createCircle('.circle-kapustina', 'координация работы юридического отдела', 9,47)