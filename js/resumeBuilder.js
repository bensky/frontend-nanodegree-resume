var bio = {
	"name" : "Benjamin Krokosky",
	"role" : "Software Manager",
	"contact_info" : {
		"mobile" : "412-445-0711",
		"email" : "ben@krokosky.com",
		"github" : "bensky",		
		"twitter" : "@benkrokosky",
		"location" : "Pittsburgh, PA"
	},
	"welcome_message" : "Welcome to my interactive resume",
	"skills" : ["C","C++", "Embedded Programming", "Java", "HTML", "Javascript", "Management"],	
	"pic_URL" : "https://yt3.ggpht.com/-4stmkIg4g9I/AAAAAAAAAAI/AAAAAAAAAAA/KQHXanuFIXo/s100-c-k-no/photo.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact_info.twitter);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contact_info.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
		var formattedPic = HTMLbioPic.replace("%data%",bio.pic_URL);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_message);
		var formattedSkills = HTMLskills.replace("%data%",bio.skills);

		$("#topCol2").append(formattedMobile);
		$("#topCol2").append(formattedEmail);
		$("#topCol2").append(formattedTwitter);
		$("#topCol2").append(formattedGitHub);
		$("#topCol2").append(formattedLocation);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topCol2").prepend(formattedWelcome);
		$("#topCol1").append(formattedPic);

		if(bio.skills.length > 0) {
			$("#topCol3").append(HTMLskillsStart);
			var total_skills = 0;
			while(total_skills < bio.skills.length) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[total_skills]);
				$("#topCol3").append(formattedSkill);
				total_skills++;
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedLocation);		
	}
};


var education = {
	"schools" : [
		{
			"name": "Carnegie Mellon - Tepper",
			"location": "Pittsburgh, PA",			
			"degree": "MBA",
			"dates" : "1998",	
			"major": ["Marketing"]
		},
		{
			"name": "Carnegie Mellon",
			"location": "Pittsburgh, PA",
			"degree": "BS",
			"dates": "1987",
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
	],
	display: function() {	
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchool+formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
			
		$(".education-entry:last").append(HTMLonlineClasses);

		for(course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedTitle+formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedURL);
		}
	}	
};


var work = {
	"jobs" : [
		{
			"employer": "Compunetix",
			"title": "Director of Software Engineering",
			"location": "Monroeville, PA",
			"dates": "May 2008  - Present",
			"description": "* Responsible for a team of forty engineers doing web, embedded, database, client-server and desktop software development. <br> * Manage the creation all software written for a $25 million division of Compunetix which creates technologies targeted toward the audio conferencing service market. <br>	* Design new products, collect requirements from marketing and existing customers <br> * Work with team managers to set budgets and schedules for all software projects <br> * Have ultimate responsibility for software architecture and resolution of technical issues. <br> * Have hire and fire responsibilities for development team members. <br>	* Develop ISO 9001 procedures for Compunetix certification.<br>* Report directly to Compunetix Vice President."
		},
		{
			"employer": "Compunetix",
			"title": "CONTEX Summit Development Manager",
			"location": "Monroeville, PA",
			"dates": "May 2001  - May 2008",
			"description": "* Created requirements for an innovative new conferencing bridge known as the Summit. Supervised and contributed to the architecture, hardware design and software design of the new bridge. Bridge is very successful in the market and was the basis for the majority of Compunetix sales thereafter.<br> * Supervised a team of twenty-five software developers in creating software for the new conference bridge. Created teams and assigned leadership responsibilities. Supervise and oversee process, tools and techniques used. Bridge uses Freescale PowerPC processors, OSE real time OS and is programmed in C and C++. Rational tools suite is used for configuration management. <br>	* Interfaced with customers to determine new requirements for the conference bridge. Schedule new development projects and product roadmap."
		},
		{
			"employer": "Compunetix",
			"title": "Embedded Protocols Development Manager",
			"location": "Monroeville, PA",
			"dates": "August 1995  - May 2001",
			"description": "* Supervised a team of engineers in designing, implementing and testing embedded systems software for advanced multimedia teleconferencing systems. Our team supported Primary Rate ISDN interfaces (T1/E1), Robbed Bit and Channel Associated Signaling and T.120 Data Conferencing. All software development uses Object Oriented C++.<br>	* Develop winning proposals in response to customer needs.<br>	* Develop practices and procedures needed to move Compunetix to CMM Level 2."
		},
		{
			"employer": "Compunetix",
			"title": "Software and Systems Development Engineer",
			"location": "Monroeville, PA",
			"dates": "August 1988  - August 1995",
			"description": "* Developed software using C and C++ to implement new standard features on the Compunetix Contex conferencing bridge.<br>	* Acquired necessary governmental approvals for Compunetix equipment for sale in Australia, Switzerland and Italy.<br>	* Supervised the wiring plan, equipment selection, and coordination with service providers for the establishment of Compunetix' conference call service.<br>	* Supervised the installation and wrote custom software for many conference bridge installations, for both commercial and government customers.<br>	* Designed and conducted maintenance and theory of operation training courses for Compunetix customers. <br>	* Designed Compunetix hardware including switch cards and master clock modules.ractices and procedures needed to move Compunetix to CMM Level 2."
		}	
	],
	display: function() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployer+formattedTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDesc);
		}
	}
};


var projects = {
	"projects" : [
		{
			"title": "Contex Summit Olympus",
			"dates": "2013-2014",
			"description": "High Definition Audio Conferencing Bridge that uses all the latest standards.  Every port within the bidge may be high definition or standard definition audio. Did overall project definition, technology selection and project management.",
			"images": []
		},
		{
			"title": "Hybrid Audio Gateway",
			"dates": "2013-2014",
			"description": "Client for WebEx Hybrid Audio and modifications to standard Compunetix products to allow a VoIP Hybrid Audio Client to work with PSTN. Did overall project definition, technology selection and project management.",
			"images": []
		},
		{
			"title": "Presenter Web Based Sharing Client",
			"dates": "2013-2014",
			"description": "Create plugin and adapt Presenter collaboration project to allow sharing to be initiated from within a browser. Did overall project definition, technology selection and project management.",
			"images": []
		}
	],
	display: function() {
		for(prj in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);
			var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDesc);
		}		
	}
};




bio.display();
work.display();
projects.display();
education.display();



$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);
});


function inName(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    var firstInit = oldName[0].toUpperCase();
   
	finalName = names[0].toLowerCase() + " " + names[1].toUpperCase() + " ";
	finalName = firstInit + finalName.slice(1,-1);

	return finalName;
};




$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


