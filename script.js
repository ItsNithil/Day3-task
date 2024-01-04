var data = new XMLHttpRequest();
data.open("GET","https://restcountries.com/v3.1/all");
data.send();
data.onload = function()
{
    var res = JSON.parse(data.response);
    console.log(res);
    for(var i=0; i<res.length;i++ )
    {
        console.log("Country name is :", res[i].name);
        console.log("Country region is :",res[i].region);
        console.log("Country subregion is :",res[i].subregion);
        console.log("Country population is :",res[i].population);
                
    }
}