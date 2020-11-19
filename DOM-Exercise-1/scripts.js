function main()
{
    const growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    const shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index++)
    {
        const element = list[index];
        console.log(element);

    }

    const link = document.querySelector('.link');
    link.setAttribute('href', "https://www.example.com");
    link.innerText = "somewhere";

    const hideMe = document.getElementById('hide-me'); 
    hideMe.style.display = "none"; 

    const showMe = document.getElementById('show-me'); 
    showMe.style.display = "block"; 

    const welcomeName = document.getElementById("name").value; 
    console.log(welcomeName); 
   document.querySelector('h1').innerText = (`Welcome ${welcomeName}`); 


}
