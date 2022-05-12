function openCity(evt, cityName) {


    // var i, tabcontent, tablinks;
    // tabcontent = document.querySelector(".tabcontent");
    // console.log(tabcontent);

    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";
}

const idselected = "";

const tabselector = () => {
    const tab = document.querySelector('.tab');
    const tablinks = document.querySelectorAll('.tablinks');
    tab.addEventListener('click', (item) => {
        console.log(item.currentTarget);

        const productnameselected = item.target;

        tablinks.forEach((element) => {
            element.classList.remove("active")
        });

        tablinks.forEach((element) => {
            if (productnameselected == element) {
                element.className += " active";
            }
        });
    });


    // tablinks.forEach((element) => {
    //     const nameTabLink = element.innerHTML;
    //
    //     const itemtabcontent = document.querySelectorAll('.itemtabcontent');
    //     itemtabcontent.forEach((item) => {
    //         const nameContent = item.innerHTML;
    //         if (nameContent == nameTabLink) {
    //             console.log("esigual");
    //             item.classList.add('hidden');
    //         }
    //
    //     });
    // });


}
export {tabselector}


