alert( document.head.innerHTML );
var variant  = 2;
var name = 'Batih Dmutro';
var elem = document.getElementById('list-header');
elem.innerHTML = '<b>' + elem.textContent + ' ' + variant + '</b>';
document.getElementsByTagName("li")[1].innerHTML = name;
document.getElementsByTagName("ul")[0].style.color = '#444';