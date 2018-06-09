# Mongo_Scraper
![introPhoto](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(21).png)

## Introduction
This particular assignment for the University of Richmond coding bootcamp is to gain experience with scraping data from a large website and to post it to an application from a mongo database. This assignment also serves to get practice with organizing an application utilizing node.js, express, mongoose, cheerio, handlebars, and request.

## Visit Site
This site can be viewed [here](https://mon-go-scraper.herokuapp.com/)

## How it works:
* The initial site is a simple visually pleasing HTML layout with handlbars that includes articles rendered on left with
space on right for entering notes:
![stepOne photo](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(1).png)

* One clicks the link for a new scrape and the database is populated:
![stepTwo photo](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(5).png)

* At this point of the project, a confirmation page that the scrape is complete appears (future development it will be a modal)
![StepThree photo](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(2).png)

* The route for articles provides a list of articles in the database with all the information in json format:
![StepFour photo](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(3).png)

* When one clicks the Article on left side of screen a rough coded note pops up on the right and will be added to the database in the note collection:
![stepFive photo](https://raw.githubusercontent.com/jdublu416/Mongo_Scraper/master/public/assets/images/Screenshot%20(4).png)

## Issues and Future Development:
Although this project does not meet my standard as a finished application, I learned a great deal from the struggles I encountered. At times this project created frustration by my inexperience with mongodb, and through what seemed like non-stop troubleshooting, I gained a better understanding of writing routes and pulling data. Within the time frame of the class, I need to abandon this for now and plan to revisit this application to fix minor bugs and style the page more eloquently.
