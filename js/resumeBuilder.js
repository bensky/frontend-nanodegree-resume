var skills = ["C","C++", "HTML", "JS", "Management"];

var bio = {
	"name" : "Benjamin H. Krokosky",
	"role" : "Software Manager",
	"contact_info" : {
		mobile : "412-445-0711",
		email : "ben@krokosky.com",
		twitter : "@benkrokosky",
		github : "bensky",
		location : "Pittsburgh, PA"
	},
	"pic_URL" : "https://yt3.ggpht.com/-4stmkIg4g9I/AAAAAAAAAAI/AAAAAAAAAAA/KQHXanuFIXo/s100-c-k-no/photo.jpg",
	"welcome_message" : "Welcome to my interactive resume",
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact_info.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.mocation);


var formattedPic = HTMLbioPic.replace("%data%",bio.pic_URL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);


$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#header").append(formattedSkills);



