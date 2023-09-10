function myfunc(){
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");
    if((b1 == 'x' || b1 == 'X') && (b2 == 'X' || b2 == 'x') && (b3 == 'X' || b4 == 'x')){
        document.getElementById('print').innerHTML = "Player X won";
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b2btn.style.color = 'red';
        b3btn.style.color = 'red';
    }
    else if ((b1 == 'X' || b1 == 'x') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b4btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if ((b9 == 'X' || b9 == 'x') && (b8 == 'x' || b8 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;

        b9btn.style.color = 'red';
        b8btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if ((b3 == 'X' || b3 == 'x') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b7btn.disabled = TRUE;

        b3btn.style.color = 'red';
        b6btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if ((b1 == 'X' || b1 == 'x') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b7btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b5btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if ((b3 == 'X' || b3 == 'x') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = TRUE;
        b1btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b3btn.style.color = 'red';
        b5btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if ((b2 == 'X' || b2 == 'x') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b2btn.style.color = 'red';
        b5btn.style.color = 'red';
        b8btn.style.color = 'red';
    }
    else if ((b5 == 'X' || b5 == 'x') && (b4 == 'x' || b4 == 'X') && (b6 == 'x' || b6 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b1btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b4btn.style.color = 'red';
        b5btn.style.color = 'red';
        b6btn.style.color = 'red';
    }
    else if ((b1 == '0' || b1 == 'o') && (b2 == 'o' || b2 == '0') && (b3 == '0' || b3 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b2btn.style.color = 'red';
        b3btn.style.color = 'red';
    }
    else if ((b1 == '0' || b1 == 'o') && (b4 == 'o' || b4 == '0') && (b7 == '0' || b7 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b4btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if ((b4 == '0' || b4 == 'o') && (b5 == 'o' || b5 == '0') && (b6 == '0' || b6 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b4btn.style.color = 'red';
        b5btn.style.color = 'red';
        b6btn.style.color = 'red';
    }else if ((b7 == '0' || b7 == 'o') && (b8 == 'o' || b8 == '0') && (b9 == '0' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b1btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b3btn.disabled = TRUE;

        b7btn.style.color = 'red';
        b8btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if ((b3 == '0' || b3 == 'o') && (b6 == 'o' || b6 == '0') && (b9 == '0' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = TRUE;
        b5btn.disabled = TRUE;
        b1btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b2btn.disabled = TRUE;

        b9btn.style.color = 'red';
        b6btn.style.color = 'red';
        b3btn.style.color = 'red';
    }
    else if ((b1 == '0' || b1 == 'o') && (b5 == 'o' || b5 == '0') && (b9 == '0' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b8btn.disabled = TRUE;
        b3btn.disabled = TRUE;

        b1btn.style.color = 'red';
        b5btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if ((b3 == '0' || b3 == 'o') && (b5 == 'o' || b5 == '0') && (b7 == '0' || b7 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = TRUE;
        b2btn.disabled = TRUE;
        b4btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b9btn.disabled = TRUE;
        b8btn.disabled = TRUE;

        b3btn.style.color = 'red';
        b5btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if ((b5 == '0' || b5 == 'o') && (b2 == 'o' || b2 == '0') && (b8 == '0' || b8 == 'o')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = TRUE;
        b1btn.disabled = TRUE;
        b6btn.disabled = TRUE;
        b7btn.disabled = TRUE;
        b3btn.disabled = TRUE;
        b9btn.disabled = TRUE;

        b2btn.style.color = 'red';
        b5btn.style.color = 'red';
        b8btn.style.color = 'red';
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') &&
    (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')){
        document.getElementById('print').innerHTML = "Match Tie";
    }
    else {
        if(flag == 1){
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}
function