
var table = document.createElement("table");
var tr;
var td;
var abc = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];
var num = ["", "1", "2", "3", "4", "5", "6", "7", "8", ""]


for (var i = 0; i < 10; i++) {
    tr = document.createElement("tr");
    table.append(tr);
    for (var j = 0; j < 10; j++) {
        td = document.createElement("td");
        tr.append(td);

        //Записываем буквы и числа по краю доски и назначаем класс для перевенрнутых значений
        if (i == 0) {
            td.innerText = abc[j];
            td.className = "rotate";
        }
        if (i == 9) {
            td.innerText = abc[j];
        }
        if (j == 0) {
            td.innerText = num[i];
        }
        if (j == 9) {
            td.innerText = num[i];
            td.className = "rotate";

        }
        //Присваиваем цвет ячейкам кроме ячеек с буквами и цифрами
        if (i == 0 && j < 10 || j == 0 && i < 10 || i == 9 && j < 10 || j == 9 && i < 10) {
            td.style.backgroundColor = "white";

        } else if ((i % 2 == 0 && j % 2 == 0) || i % 2 == 1 && j % 2 == 1) {
            td.style.backgroundColor = "rgb(218, 211, 185)";
        } else {
            td.style.backgroundColor = "grey";
        }

        //Расставляем фигуры

        if (i == 2 && j > 0 && j < 9) {
            td.innerHTML = "&#9817;";
        } else if (i == 1 && j == 1 || i == 1 && j == 8) {
            td.innerHTML = "&#9814;";
        } else if (i == 1 && j == 2 || i == 1 && j == 7) {
            td.innerHTML = "&#9816;";
        } else if (i == 1 && j == 3 || i == 1 && j == 6) {
            td.innerHTML = "&#9815;";
        } else if (i == 1 && j == 4) {
            td.innerHTML = "&#9813;";
        } else if (i == 1 && j == 5) {
            td.innerHTML = "&#9812;";
        } else if (i == 7 && j > 0 && j < 9) {
            td.innerHTML = "&#9823;";
        } else if (i == 8 && j == 1 || i == 8 && j == 8) {
            td.innerHTML = "&#9820;";
        } else if (i == 8 && j == 2 || i == 8 && j == 7) {
            td.innerHTML = "&#9822;";
        } else if (i == 8 && j == 3 || i == 8 && j == 6) {
            td.innerHTML = "&#9821;";
        } else if (i == 8 && j == 4) {
            td.innerHTML = "&#9818;";
        } else if (i == 8 && j == 5) {
            td.innerHTML = "&#9819;";
        }


    }

}

document.getElementById("chessboard").append(table);








