/*
This is empty on purpose! Your code to build the resume will go here.
 */
// declaration of global variable

/*
var name = "Tianshu Li";
var role = "Front-end learner";

$("#main").append(name);

var formattedName = HTMLHeadElement.relace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName, formattedRole);
*/

var bio = {
	"name": "Tianshu Li",
	"role": "Front-end Learner",
	"contact_infor": "tsli.alex@outlook.com",
	"picture_url": "xxxx",
	"welcome_message": "nin lai la",
	"skills": ["HTML", "JavaScript", "Python", "C#"]
}

$("#main").append(bio.name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);


// work object

var work = {};
work.positon = "Assistant";
work.employer = "Pactera";
work.years = 0.5;
work.city = "Jining";

// education object

var education = {};

education["school"] = "UNNC";
education["years"] = 4;
education["city"] = "Ningbo";

$("#main").append(work["position"], "<br>");
$("#main").append(education.school);