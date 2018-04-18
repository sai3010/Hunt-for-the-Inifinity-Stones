function check()
{
var ans=document.getElementById("qans1").value;
alert(ans);
if(ans.match("Brooklyn 99"))
{
    alert("Correct!! You will be redirected to the next question");
    window.location="questions2.html";
}
}