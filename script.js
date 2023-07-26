function slideBox() {
    const box = document.querySelector('.box');
    const info = box.querySelector('.info');

    if (box.classList.contains('open')) {
        info.classList.add('hidden');
        box.classList.remove('open'); // Remove the 'open' class to restore the original box size
    } else {
        info.classList.remove('hidden');
        box.classList.add('open'); // Add the 'open' class to expand the box
    }
}
