let counter = 0;

function first() {
    let h1 = document.getElementById("mainTitle");
    let title = document.getElementById("title");
    let h2 = document.getElementById("title1");
    let h3 = document.getElementById("title2");
    let firstInput = document.getElementById("firstInput").value;

    if (counter == 0) {
        if (firstInput == "1") {
            h1.innerHTML = "Игра закончена. Вы выиграли!";
            title.innerHTML = "";
            h2.innerHTML = "";
            h3.innerHTML = "";
        } else if (firstInput == "2") {
            h1.innerHTML = "Вы идете и натыкаетесь на пещеру. Ваши действия?";
            title.innerHTML = "";
            h2.innerHTML = "1-Зайти в пещеру";
            h3.innerHTML = "2-Забить и пойти дальше";
            counter = 1;
        }
    } else if (counter == 1) {
        if (firstInput == "1") {
            h1.innerHTML = "Вы познакомились с серийным маньяком. Вы проиграли";
            title.innerHTML = "";
            h2.innerHTML = "";
            h3.innerHTML = "";
        } else if (firstInput == "2") {
            h1.innerHTML = "Вы вышли из леса. Вы победили";
            title.innerHTML = "";
            h2.innerHTML = "";
            h3.innerHTML = "";
        }
        counter = 0;
    }
}
