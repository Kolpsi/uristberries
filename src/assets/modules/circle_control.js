// создание круга
document.querySelector('.circle').innerHTML = "листать вниз - листать вниз - листать вниз".split('')
    .map((e, i) => `<span class="circle-span" style="--rot:${i*12}deg">${e}</span>`).join('');
