function login(){
    window.location = "question_page.html";
}

function addUser1(){
    player1_name = document.getElementById("player1_name_input").value;
    localStorage.setItem("player1_name", player1_name);
}

function addUser2(){
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player2_name", player2_name);
}