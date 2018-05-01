function check()
{
var ans=document.getElementById("qans1").value;
alert(ans);
if(ans.match("Brooklyn 99"))
{
    alert("Correct!! You will be redirected to the next question");
    window.location="question2.html";
}
}
function check4()
{
    var ans=document.getElementById("qans4").value.toUpperCase();
    if(ans.match("THANOS"))
    {
        alert("Correct!! You will be redirected to the next question");
        window.location="question4.html";
    }

}