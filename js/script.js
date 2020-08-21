function setActive(id) {
    document.querySelector('.selected').classList.remove('selected');
    document.getElementById(id).classList.add('selected');
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`#${id}-board`).classList.add('active');
}