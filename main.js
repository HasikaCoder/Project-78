var images = ["https://cdn.shopify.com/s/files/1/0173/8676/products/family_book.jpg?v=1460001178" , "https://th.bing.com/th/id/Rd56cd25436d0d3f56ad2f143750f7455?rik=vuTquVmagRmXdg&riu=http%3a%2f%2fimages.clipartpanda.com%2fgrandfather-clipart-grandfather.png&ehk=cZL4WMuOkNYjMmBdy1TNdS6UNgBNr7pcIuqJqUTndnA%3d&risl=&pid=ImgRaw","https://th.bing.com/th/id/R71657642c4a753ac851c9641791fafea?rik=R8HW%2bZQ7RlezYQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fgrandmother-clipart-grandmother2.png&ehk=OkMnOFf3NeknBhgkLdiROZprmLR35zm%2fS6EAH%2biShMY%3d&risl=&pid=ImgRaw", "https://webstockreview.net/images/father-clipart-10.jpg" , "https://th.bing.com/th/id/OIP.TSbKPUFGM_u_UrFQA_tQdwHaLb?pid=ImgDet&rs=1","https://th.bing.com/th/id/OIP.ch8K_3BARdoHjUUCUuZ4twHaPd?pid=ImgDet&rs=1","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Family Book","Swamy Durai", "Saraswati", "Vijay Anand", "Anudeepa", "Hasika", "Harshitha"];
var k = 0;
function next()
{
    k++;
    var numbers_of_family_member_in_array = 5
    if(k > numbers_of_family_member_in_array )
    {
        k = 0;
    }
    var family_images = images[k];
    var family_names  = names[k];
    document.getElementById("family_member:image").src = family_images;
    document.getElementById("family_member-name").innerHTML = family_names;
}
