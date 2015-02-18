var bio = {
	"name" : "Benjamin H. Krokosky",
	"role" : "Software Manager",
	"contact_info" : "118 Pauline Drive, Monroeville PA, 15146",
	"pic_URL" : "https://yt3.ggpht.com/-4stmkIg4g9I/AAAAAAAAAAI/AAAAAAAAAAA/KQHXanuFIXo/s100-c-k-no/photo.jpg",
	"welcome_message" : "Welcome to my interactive resume",
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact_info);

$
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedContact);

var skills = ["C","C++", "HTML", "JS", "Management"];

