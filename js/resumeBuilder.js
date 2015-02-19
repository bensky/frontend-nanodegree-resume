var work = {
	"jobs" : [
		{
			"employer": "Compunetix",
			"title": "Director of Software Engineering",
			"location": "Monroeville, PA",
			"dates": "May 2008  - Present",
			"description": "* Responsible for a team of forty engineers doing web, embedded, database, client-server and desktop software development. Manage the creation all software written for a $25 million division of Compunetix which creates technologies targeted toward the audio conferencing service market.
			* Design new products, collect requirements from marketing and existing customers
			* Work with team managers to set budgets and schedules for all software projects
			* Have ultimate responsibility for software architecture and resolution of technical issues.
			* Have hire and fire responsibilities for development team members.
			* Develop ISO 9001 procedures for Compunetix certification.
			* Report directly to Compunetix Vice President."
		},
		{
			"employer": "Compunetix",
			"title": "CONTEX Summit Development Manager",
			"location": "Monroeville, PA",
			"dates": "May 2001  - May 2008",
			"description": "* Created requirements for an innovative new conferencing bridge known as the Summit. Supervised and contributed to the architecture, hardware design and software design of the new bridge. Bridge is very successful in the market and was the basis for the majority of Compunetix sales thereafter.
			* Supervised a team of twenty-five software developers in creating software for the new conference bridge. Created teams and assigned leadership responsibilities. Supervise and oversee process, tools and techniques used. Bridge uses Freescale PowerPC processors, OSE real time OS and is programmed in C and C++. Rational tools suite is used for configuration management.
			* Interfaced with customers to determine new requirements for the conference bridge. Schedule new development projects and product roadmap."
		},
		{
			"employer": "Compunetix",
			"title": "Embedded Protocols Development Manager",
			"location": "Monroeville, PA",
			"dates": "August 1995  - May 2001",
			"description": "* Supervised a team of engineers in designing, implementing and testing embedded systems software for advanced multimedia teleconferencing systems. Our team supported Primary Rate ISDN interfaces (T1/E1), Robbed Bit and Channel Associated Signaling and T.120 Data Conferencing. All software development uses Object Oriented C++.
			* Develop winning proposals in response to customer needs.
			* Develop practices and procedures needed to move Compunetix to CMM Level 2."
		},
		{
			"employer": "Compunetix",
			"title": "Software and Systems Development Engineer",
			"location": "Monroeville, PA",
			"dates": "August 1988  - August 1995",
			"description": "* Developed software using C and C++ to implement new standard features on the Compunetix Contex conferencing bridge.
			* Acquired necessary governmental approvals for Compunetix equipment for sale in Australia, Switzerland and Italy.
			* Supervised the wiring plan, equipment selection, and coordination with service providers for the establishment of Compunetix' conference call service.
			* Supervised the installation and wrote custom software for many conference bridge installations, for both commercial and government customers.
			* Designed and conducted maintenance and theory of operation training courses for Compunetix customers.
			* Designed Compunetix hardware including switch cards and master clock modules.ractices and procedures needed to move Compunetix to CMM Level 2."
		}	
	]
};


var skills = ["C","C++", "Java", "HTML", "JS", "Management"];

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



var education = {
	"schools" : [
		{
			"name": "Carnegie Mellon - Tepper",
			"location": "Pittsburgh, PA",
			"degree": "MBA"
		},
		{
			"name": "Carnegie Mellon",
			"location": "Pittsburgh, PA",
			"degree": "BS",
			"major": ["Electrical Engineering"]
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"title": "Introduction to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"title": "Introduction to Databases",
			"school": "Stanford",
			"dates": 2013,
			"url": "https://class.stanford.edu/courses/Home/Databases/"
		},
		{
			"title": "Foundations of Computer Graphics",
			"school": "BerkleyX",
			"dates": 2012,
			"url": "https://www.edx.org/school/uc-berkeleyx"
		}		
	]
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

var formattedPosition = HTMLworkTitle.replace("%data%",work["position"]);
var formattedSchoolName = HTMLschoolName.replace("%data%",education.school); 

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

$("#workExperience").append(formattedPosition);
$("#education").append(formattedSchoolName);



