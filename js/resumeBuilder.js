/*
This is empty on purpose! Your code to build the resume will go here.
 */

// create and customize the bio, eduaction and work objects:

// display function:

var displayFunction = function(){
    console.log(this);
};

// bio

var bio = {
    name : "Tianshu Li",

    role : "Data Operation",

    contacts : {
          mobile: "+45 50188991",
          email: "tsli.alex@gmail.com",
          github: "@KowalskiAlexander",
          twitter: "@Alex_Li",
          location: "Frederriskberg Copenhagen Denmark"
    },
    welcomeMessage: "Hello World.",
    skills: ["Office softwares", "Accounting", "Data analysis", "SQL", "Python"],
    biopic: "images/lts.jpeg",
    display:  displayFunction()
};


// education
// delcare the school obejcts
var unnc, cbs;

unnc = {
    name: "University of Nottingham Ningbo China",
    location: "Ningbo China",
    degree: "BA",
    majors: ["Finance Accounting and Management"],
    dates: 2017,
    url: "http://www.nottingham.edu.cn/"
};

cbs = {
    name: "Copenhagen Business School",
    location: "Copenhagen Denmark",
    degree: "BA",
    majors: ["Finance Accounting and management"],
    dates: 2016,
    url: "http://www.cbs.dk/"
};

// decalre the online courses
var iipp, icsp, dpup;

iipp = {
    title: "Introduction to Interactive Python Programming ",
    school: "Rice University",
    date: 2015,
    url: "https://www.coursera.org/course/interactivepython1"
};

icsp = {
    title: "Introduction Computer Science and Programming in Python",
    school: "Massachusetts Institute of Technology",
    date: 2015,
    url: "https://courses.edx.org/courses/MITx/6.00.1x_5/1T2015/info"  
};

dpup = {
    title: "Data Processing Using Python",
    school: "Nanjing University",
    date: 2016, 
    url: "https://www.coursera.org/learn/hipython"
};
// eudcation 
var eduaction = {
    schools: [unnc, cbs], 
    onlineCourses: [iipp, icsp, dpup],
    display: displayFunction()
};

// work

var work = {
  jobs: [
      {
        employer: "Pactera",
        title: "Assistant",
        location: "Jining China",   
        dates: "2015 Jun. - 2015 Aug.",
        descriptions: "The assistant for IT outsourcing consultant."
      },
      
      {
          employer: "UNNC",
          title: "Library Helper",
          location: "Ningbo China",
          dates: "2014 Sep. - 2015 Jan",
          descriptions: "The library helper for school library."
      }
  ],
  display: displayFunction()
};

// prjects

var projects = {
    prjects: [
        {
            title: "Proejct Kowalski",
            dates: "2015 - 2016",
            descriptions: "It is a fake project..",
            images: ["http://xiaoji-chen.com/blog/wp-content/uploads/2012/10/tree.png", "http://xiaoji-chen.com/blog/wp-content/uploads/2012/10/part.png"] 
        },
        
        {
            title: "Project Alexnander",
            dates: "2015 - 2016",
            descriptions: "Again, it is fake..I don't have any projects.",
            images: ["http://xiaoji-chen.com/blog/wp-content/uploads/2011/07/01.jpg", "http://xiaoji-chen.com/blog/wp-content/uploads/2011/07/07.jpg"]
        }    
    ],
    
     display: displayFunction()
    
};
/*_______________________________________________________________________________________________________________ */

var ph = "%data%";
// name, and role
var formattedHeaderRole = HTMLheaderRole.replace(ph, bio.role);
$("#header").prepend(formattedHeaderRole);

var formattedHeaderName = HTMLheaderName.replace(ph, bio.name);
$("#header").prepend(formattedHeaderName);

// header contact and footer contacts.
var formattedMobile = HTMLmobile.replace(ph, bio["contacts"].mobile);
var formattedEmail = HTMLemail.replace(ph, bio["contacts"].email);
var formattedGithub = HTMLgithub.replace(ph, bio["contacts"].github);
var formattedTwitter = HTMLtwitter.replace(ph, bio["contacts"].twitter);
var formattedLocaiton = HTMLlocation.replace(ph, bio["contacts"].location);

var formattedContactArray = [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocaiton];

for (var contact in formattedContactArray) {
    $("#topContacts").append(formattedContactArray[contact]);
    $("#footerContacts").append(formattedContactArray[contact]);
};

// bio pic
var formattedBioPic = $(HTMLbioPic).attr("src", "images/lts.jpg");
$("#header").append(formattedBioPic);