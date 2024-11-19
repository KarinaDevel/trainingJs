function openWindow(){
    const modalWindow = document.getElementById("modalOpen");
    modalWindow.style.display = 'flex';
}
function closeWindow(){
    const modalWindow = document.getElementById("modalOpen");
    modalWindow.style.display = 'none';
}
function openBurger(){
    const list = document.getElementById('list');
    list.style.display = "block"
}
function closeBurger(){
    const list = document.getElementById('list');
    list.style.display = "none"
}