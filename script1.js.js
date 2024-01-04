
var data = new XMLHttpRequest();
data.open("GET","https://restcountries.com/v3.1/all");
data.send();
data.onload = function()
{
    var res = JSON.parse(data.response);
    console.log(res);
    for(var i=0; i<res.length;i++ )
    {
        console.log(res[i].flags);
    }
}

