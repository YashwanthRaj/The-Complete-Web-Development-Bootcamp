## Travel Tracker Application

This is a web application that tracks all the countries that we have been with. We can add the country which will then turn into a different color denoting that we have been there. This application is built with EJS and Postgres for its database. 

### Stage 1:

The goal of stage 1 is to manually add few values into the database and then run the code such that the values added into the table are being reflected into the website. 

We are creating a table called countries which will have the country and country code [2 Digit varchar] and another table called visited_countries to keep track of all the countries visited already and ones yet to visit. 

### Stage 2:

The goal is to add a name of country and the program will get the country code from the country database and will add the country code to the visited_countries table which will in return get highlighted in the website when we redirect to the home page.

We are creating a table which will have the two digit country code and the country names of all the countries in a separate table. So that when user types name of countries to add in the map, we will look up this table and figure out what is the country code for this country. 

 

### Stage 3:

The goal of this stage is to check and report if the entered country name does not exist or already exist. This is achieved using try and catch blocks. 

### Stage 4:

The goal of this stage is to understand and render the country names which has a long names and people enter only one part of the country name and leave out the rest. We resolve this part by adding **like** in query. So if the country name part entered is actually part of the country name in the database, then we can identify and return the country code.


### Family Travel Tracker
The new commint/version tracks the locations of the entire family and not just a single user
