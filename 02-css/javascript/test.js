const Ganti_warna = document.getElementsByClassName('text');
setInterval(function () {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    Ganti_warna[0].style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
}, 700);

