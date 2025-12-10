
/*menu bar bo moblie*/ 
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click",() =>{

menu.classList.toggle("fa-times");
navbar.classList.toggle("active");

});
/*kotay menu bar bo moblie*/
    
/*Pop message la katy clik krdn la buttony BookNow*/
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    openPopup();
});

function openPopup() {
    document.body.classList.add('popup-visible');
}

function closePopup() {
    document.body.classList.remove('popup-visible');
}
/*kotay Pop message la katy clik krdn la buttony BookNow*/