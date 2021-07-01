# Summative-B
Summative B code

#### Project description:

The website in question is designed for being a simulation of a booking system for the New Zealand Tourism company. The site is a single page layout where the user scrolls down as they fill out forms that will direct them to the desired outcome.

The home page consists of a nice cover photo and call to action that when clicked will start the booking process.
	A series of modals and calls to action will direct the user through the booking process.

#### Validation:

Html validated with W3 schools validation system.
CSS validated with W3 schools validation system.
Javascript validated with Gulp validation system.
Screenshots in the Doc proposal.



#### Javascript style guide reference
I have used JavaScript standard style for my style guide of choice. I have attempted to hadher to those standards to the best of my ability. These conventions are as follows.
1.  Use 2 spaces for indentation.
2.  Use single quotes for strings except to avoid escaping.
3.  No unused variables.
4.  Infix operators must be spaced.
5.  Always use === instead of ==.
6.  Commas should have a space after them.
7.  Keep else statements on the same line as their curly braces.
8.  Multiple blank lines not allowed.
9.  For var declarations, write each declaration in its own statement.
10. Wrap conditional assignments
11. Use camelcase when naming variables and functions.
12. space between colon and value in key value pairs.
13. No duplicate arguments in function definitions.
14. Avoid unnecessary function binding.

I have attempted to adhere to these standards layout for JavaScript standard to the best of my ability. Due to some over sites I had to go through making sure that I adjusted my code to fit with all standards. I believe I have got them all however if I missed any it was unintentional.

#### A list of production tools and workflow items
	My production tools are listed as follows
	1. Adobe photoshop for high fidelity design and image cropping.
	2. Google docs for text formatting and write ups.
	3. Atom for page construction
	4. Gulp for javascript validation
	5. W3 school for html and CSS validation
	6. Github for online saving.  

####	List of your chosen .js library/s and plugin/s
1. Jquery script 4.3, the latest version. For modals
2. Jquery CSS For modals
3. Toastr, for toaster pop ups.
4. Bootstrap, for compatibility with Toastr
5. I indeed used an awesome font but ended up not needing it in the end.

#### Elvulation.
This has been a very challenging assignment for me but I am happy with the way that it turned out, plus I have learned so much from this. I could write pages upon pages about the challenges I faced and my solutions but instead I will list problems I had to solve and the solutions for these problems.  

First I had to signify which options could not be accessed. I had to create a function to change the opacity of the available options, by using the if else statement.

The booking modal needed to be to determine which numbers were selected and if it fit the parameters for the appropriate options. So I used a isNaN statement with a loop to determine if they can book at the selected hotel.

I then needed to add the number of days with the object data so that I may work out the total cost. For this I used simple math variables.

I then added a scroll function to the completion buttons to send the user to the menu so that they may see their options.

 The menu is presented as images and when the user clicks on it it shows the ingredients. Then after a 10 second timer the image would appear. I would have liked for the user to click the div again and the image would reaper, but that was beyond my skill level.

To avoid confusion I change the opacity with a loop for the options that are not available to user depending on their hotel choice.

Then I needed to add toasters to help direct the user around the site, as well as tell them when certain actions like booking had been completed. To do this I needed a toaster plug in, so I used toastr. This was quite difficult to learn but I eventually got the hang of it and can now display messages to the user at appropriate intervals.  

Extra note:
There is a warning message for a file not being able to load. This was needed for toastr and when I try to remove it my website brakes in some areas

Overall I am very happy with the website and will continue to work on it over the holidays to add and refine UX features so that it may be used as a profilo piece. Although I could do more going forward I am pleased that I was able to stick to my timeline with nothing catastrophic going wrong.  
