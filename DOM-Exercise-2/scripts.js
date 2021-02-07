
// document.querySelector('.links').addEventListener('click', function(event) {
//     console.log("clicked")

// }); 
// const hamburgerMenu = document.querySelector('.hamburger-menu'); 
// hamburgerMenu.addEventListener('click', function (event) {
//     const openLinks = document.querySelector('.links'); 
//     // console.log(openLinks)
//     if (openLinks.className == 'hidden') {
//         openLinks.className = 'notHidden' 
//         } else {
//             openLinks.className = 'hidden'; 
//         }
//     }
// );

document.querySelector(".menu").addEventListener('click', function (event)
{
    let openMenu = document.querySelector('.links');
    if (openMenu.style.display === 'none')
    {
        openMenu.style.display = 'block';
    } else
    {
        openMenu.style.display = 'none';
    }
});

document.querySelector('#letter-link').addEventListener('click', function (event)
{
    const letters = document.querySelector('.letters');
    const numbers = document.querySelector('.numbers');
    letters.style.display = 'block';
    numbers.style.display = 'none';
    event.preventDefault();
})

document.querySelector('#number-link').addEventListener('click', function (event)
{
    const letters = document.querySelector('.letters');
    const numbers = document.querySelector('.numbers');
    letters.style.display = 'none';
    numbers.style.display = 'block';
    event.preventDefault();
}); 