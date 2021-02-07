// Form Submission
let totalAmount = 0;
document.querySelector("#submit").addEventListener("click", makeMoney);
function makeMoney(event) {
    event.preventDefault();
    // console.log(event);
    let howMany = document.getElementbyID("how-many").value; 
    console.log(howMany);
}
// const form = document.querySelector('#new-money');
// form.addEventListener('submit', function (e){
//     e.preventDefault();y
//     const data = new FormData(form);
//     let whichCoin = data.get('which-coin');
//     let howMany = data.get('how-many');
//     console.log(whichCoin, howMany);
    
//     const money = document.createElement('div');
//     money.classList.add('coin');

    


// })



// document.querySelector('.coin').addEventListener('click', function (e) {
//     const coin = e.target;
//     coin.remove();
// });