player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_ques").innerHTML="ques turn :"+player1_name;
document.getElementById("player_ans").innerHTML="ans turn : "+player2_name;

function send() {

    No1=document.getElementById("no.1").value;
    No2=document.getElementById("no.2").value;
    ans=parseInt(No1)*parseInt(No2);
    ques="<h4>"+No1+"X"+No2+"</h4>";
    input_box="<br>ans:<input id='input_check_box' type='text'>";
    check_button="<br><br> <button class='btn btn-info ' onclick= 'check()'>Check</button>";
    row=ques+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no.1").value="";
    document.getElementById("no.2").value="";
}
qturn="player1";
atunr="player2";
function check() {
 finalans=document.getElementById("input_check_box").value;

 if (finalans==ans) {
     if (aturn=="player1"){
         player1score=player1score+1;
         document.getElementById("player1_score").innerHTML=player1score;
     }else{player2score=player2score+1;
        document.getElementById("player2_score").innerHTML=player2score;}

 }
 if(qturn=="player1"){
     qturn="player2";
     document.getElementById("player_ques").innerHTML="ques turn :"+player2_name;
}else{
    qturn="player1";
     document.getElementById("player_ques").innerHTML="ques turn :"+player1_name;
}

if(aturn=="player1"){
    aturn="player2";
    document.getElementById("player_ans").innerHTML="ans turn :"+player2_name;
}else{
   aturn="player1";
    document.getElementById("player_ans").innerHTML="ans turn :"+player1_name;
}
}