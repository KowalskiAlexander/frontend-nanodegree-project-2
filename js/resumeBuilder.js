/*
This is empty on purpose! Your code to build the resume will go here.
 */
'use strict';
// use strict mode to run the code.
// create and customize the bio, eduaction and work objects:

// bio

var bio = {
    "name": "Tianshu Li",

    "role": "Data Operation",

    "contacts": {
        "mobile": "+45 50188991",
        "email": "tsli.alex@gmail.com",
        "github": "@KowalskiAlexander",
        "twitter": "@Alex_Li",
        "location": "Frederriskberg Copenhagen Denmark"
    },
    "welcomeMessage": "Hello, welcome to see my resume!",
    "skills": ["Office softwares", "Accounting", "Data analysis", "SQL", "Python"],
    "biopic": "images/lts.jpeg",

    "display": function() {
        // name, and role
        var formattedHeaderRole = HTMLheaderRole.replace(ph, bio.role);
        $("#header").prepend(formattedHeaderRole);

        var formattedHeaderName = HTMLheaderName.replace(ph, bio.name);
        $("#header").prepend(formattedHeaderName);

        // header contact and footer contacts.
        var formattedMobile = HTMLmobile.replace(ph, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(ph, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(ph, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(ph, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(ph, bio.contacts.location);

        var formattedContactArray = [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation];

        for (var contact in formattedContactArray) {
            $("#topContacts").append(formattedContactArray[contact]);
            $("#footerContacts").append(formattedContactArray[contact]);
        };

        // bio pic
        var formattedBioPic = $(HTMLbioPic).attr("src", "images/lts.jpg");
        $("#header").append(formattedBioPic);


        // welcome msg
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(ph, bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);


        // skills
        $("#header").append(HTMLskillsStart);


        for (var i = 0; i < bio.skills.length; i++) {
            $("#header").append(HTMLskills.replace(ph, bio.skills[i]));
        };
        // can you write the for-each edition for me ? I cannot figure out....
    }

};


// education

var education = {
    "schools": [{
            "name": "University of Nottingham Ningbo China",
            "location": "Ningbo China",
            "degree": "BA",
            "majors": ["Finance Accounting and Management"],
            "dates": 2017,
            "url": "http://www.nottingham.edu.cn/"
        },

        {
            "name": "Copenhagen Business School",
            "location": "Copenhagen Denmark",
            "degree": "BA",
            "majors": ["Finance Accounting and management"],
            "dates": 2016,
            "url": "http://www.cbs.dk/"
        }
    ],

    "onlineCourses": [{
            "title": "Introduction to Interactive Python Programming",
            "school": "Rice University",
            "date": 2015,
            "url": "https://www.coursera.org/course/interactivepython1"
        },

        {
            "title": "Introduction Computer Science and Programming in Python",
            "school": "Massachusetts Institute of Technology",
            "date": 2015,
            "url": "https://courses.edx.org/courses/MITx/6.00.1x_5/1T2015/info"
        },

        {
            "title": "Data Processing Using Python",
            "school": "Nanjing University",
            "date": 2016,
            "url": "https://www.coursera.org/learn/hipython"
        }
    ],

    "display": function() {
        for (var school in education.schools) {
            var formattedSchool = education.schools[school];

            var formattedName = HTMLschoolName.replace(ph, formattedSchool.name);
            var formattedDegree = HTMLschoolDegree.replace(ph, formattedSchool.degree);
            var formattedNameAndDegree = formattedName.concat(formattedDegree);
            formattedNameAndDegree = $(formattedNameAndDegree).attr("href", formattedSchool.url)
                // change the default link to customized one. 
            var formattedLocation = HTMLschoolLocation.replace(ph, formattedSchool.location);
            var formatteddates = HTMLschoolDates.replace(ph, formattedSchool.dates);


            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedNameAndDegree, formatteddates, formattedLocation);

            for (var i in formattedSchool.majors) {
                var formattedMajor = HTMLschoolMajor.replace(ph, formattedSchool.majors[i]);
                $(".education-entry:last").append(formattedMajor);
            }

        };
        if (education.onlineCourses.length != 0) {
            $(".education-entry:last").append(HTMLonlineClasses);

            for (var course in education.onlineCourses) {
                var formattedOnlineCourse = education.onlineCourses[course];
                var formattedCourseTitle = HTMLonlineTitle.replace(ph, formattedOnlineCourse.title);
                var formattedCourseSchool = HTMLonlineSchool.replace(ph, formattedOnlineCourse.school);
                var formattedTitleAndSchool = formattedCourseTitle.concat(formattedCourseSchool);

                var formattedCourseDates = HTMLonlineDates.replace(ph, formattedOnlineCourse.date);
                var formattedCourseURL = HTMLonlineURL.replace(ph, formattedOnlineCourse.url);

                formattedCourseURL = $(formattedCourseURL).attr("href", formattedOnlineCourse.url);
                formattedTitleAndSchool = $(formattedTitleAndSchool).attr("href", formattedOnlineCourse.url);
                // neat!
                $(".education-entry:last").append(formattedTitleAndSchool, formattedCourseDates, formattedCourseURL);
            }

        };
    }
};

// work

var work = {
    "jobs": [{
            "employer": "Pactera",
            "title": "Assistant",
            "location": "Jining China",
            "dates": "2015 Jun. - 2015 Aug.",
            "descriptions": "The assistant for IT outsourcing consultant."
        },

        {
            "employer": "UNNC",
            "title": "Library Helper",
            "location": "Ningbo China",
            "dates": "2014 Sep. - 2015 Jan",
            "descriptions": "The library helper for school library."
        }
    ],
    "display": function() {
        for (var job in work.jobs) {
            var formattedWork = work.jobs[job];
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(ph, formattedWork.employer);
            var formattedTitle = HTMLworkTitle.replace(ph, formattedWork.title);

            $(".work-entry:last").append(formattedEmployer + formattedTitle);

            var formattedLocation = HTMLworkLocation.replace(ph, formattedWork.location);
            var formatteddates = HTMLworkDates.replace(ph, formattedWork.dates);
            var formattedDescriptions = HTMLworkDescription.replace(ph, formattedWork.descriptions);

            $(".work-entry:last").append(formatteddates, formattedLocation, formattedDescriptions);
        };
    }
};

// project

var projects = {
    "project": [{
            "title": "Proejct Kowalski",
            "dates": "2015 - 2016",
            "descriptions": "It is a fake project..",
            "images": ["http://xiaoji-chen.com/blog/wp-content/uploads/2012/10/tree.png", "http://xiaoji-chen.com/blog/wp-content/uploads/2012/10/part.png"]
        },

        {
            "title": "Project Alexnander",
            "dates": "2015 - 2016",
            "descriptions": "Again, it is fake..I don't have any projects.",
            "images": ["http://xiaoji-chen.com/blog/wp-content/uploads/2011/07/01.jpg", "http://xiaoji-chen.com/blog/wp-content/uploads/2011/07/07.jpg"]
        }
    ],

    "display": function() {
        for (var project in projects.project) {
            var formattedProject = projects.project[project];
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace(ph, formattedProject.title);
            var formattedDate = HTMLprojectDates.replace(ph, formattedProject.dates);
            var formattedDescriptions = HTMLprojectDescription.replace(ph, formattedProject.descriptions);


            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescriptions);

            for (var img in formattedProject.images) {
                var formattedImage = $(HTMLprojectImage).attr("src", formattedProject.images[img]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
};
/*_______________________________________________________________________________________________________________ */

var ph = "%data%";
//bio
bio.display();

// work 
work.display();

// Projects

projects.display();


// eduacation
education.display();

// ok, let's do the map!

$("#mapDiv").append(googleMap);
// append the map div to the DOM.