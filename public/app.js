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
        "Player X won" = document.getElementById('print').innerHTML;
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
        "Player X won" = document.getElementById('print').innerHTML;
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
}