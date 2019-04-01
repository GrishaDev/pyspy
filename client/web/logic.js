function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function renderData()
{
    let len = data.length;

    logs = document.getElementById('logs');

    for(let i=0; i<len; i++)
    {
        item = document.createElement('li');
        item.innerHTML = data[i];
        logs.appendChild(item);
    }
}
let datastr = httpGet('http://localhost:3000/getlogs');
data = JSON.parse(datastr);
// data = data.data;

console.log(data);

renderData();
