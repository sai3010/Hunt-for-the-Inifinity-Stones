function check()
{
var ans=document.getElementById("qans1").value.toLowerCase();
alert(ans);
if(ans.match("brooklyn99") || ans.match("brooklyn 99"))
{
    alert("Correct!! You will be redirected to the next question");
    window.location="question2.html";
}
}
function check4()
{
    var ans=document.getElementById("qans3").value.toUpperCase();
    if(ans.match("THANOS"))
    {
        alert("Correct!! You will be redirected to the next question");
        window.location="question4.html";
    }

}
function corr()
{
    alert("Correct!! You will be redirected to the next question");
    window.location="question3.html";
}