var wind = +prompt("Введите номер окна");

/* Здесь вариантов выбора окон будет только три, хотя окон 4. Но пользователь
всегда в игре видит только три окна: после первого окна будет или второе или третье. 
А третьим окном для пользователя всегда будет четвертое

*/

switch (wind) {
    case 1:
        if (answer1 == 1) {
            answer1 = works.a1;
        } else if (answer1 == 2) {
            answer1 = works.a2;
        } else {
            alert("Вы вышли из игры или ввели некорректное значение");
            break;
        }
        alert("Был вопрос: " + works.a00 + "\n" + "Получен ответ: " + answer1);
        break;
    case 2:
        if (answer1 == 1) {
            if (answer2 == 1) {
                answer2 = works.b1;
            } else if (answer2 == 2) {
                answer2 = works.b2;
            } else {
                alert("Вы вышли из игры или ввели некорректное значение");
                break;
            }
            alert("Был вопрос: " + works.b00 + "\n" + "Получен ответ: " + answer2);
            break;
        } else if (answer1 == 2) {
            if (answer3 == 1) {
                answer3 = works.c1;
            } else if (answer3 == 2) {
                answer3 = works.c2;
            } else {
                alert("Вы вышли из игры или ввели некорректное значение");
                break;
            }
            alert("Был вопрос: " + works.c00 + "\n" + "Получен ответ: " + answer3);
            break;
        }
    case 3:
        if (answer4 == 1) {
            answer4 = works.d1;
        } else if (answer4 == 2) {
            answer4 = works.d2;
        } else {
            alert("Вы вышли из игры или ввели некорректное значение");
            break;
        }
        alert("Был вопрос: " + works.d00 + "\n" + "Получен ответ: " + answer4);
        break;
}