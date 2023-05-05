var images =[
"https://i.postimg.cc/QM6PBtvT/familia.jpg",
"https://i.postimg.cc/C1kj3rCx/filho.jpg",
"https://i.postimg.cc/QM59C9F6/iris.jpg",
"https://i.postimg.cc/fT9h6xpg/kid-flash.jpg",
"https://i.postimg.cc/W3HQy3nv/pai.jpg",
"https://i.postimg.cc/SsMww4tY/snow.jpg",
]

var names = [
    "familia",
    "filho",
    "iris",
    "kid flash",
    "pai",
    "snow",  
]
    



var i = 0;
function update()
{

    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array){
        i = 0;
    } 
}


var updateimage = images[i];
var updatename = names[i];

document.getElementById("familymemberimage").src = updateimage;
document.getElementById("familymembername").innerHTML = updatename;