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