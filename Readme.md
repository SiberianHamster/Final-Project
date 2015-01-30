This website is a collaboration between Sarah Brady, Mark Lin, and Mark Ryman.
The purpose of the website is to sell tour packages for an adventure travel company named Discover South Asia, as well as provide resources for trip planning.  All photos used are from the personal collections of Mark Ryman and Sarah Brady. The graphical logo in the header of each page is an original created by Sarah Brady.

There are two file directories required for functionality of the site.  All images are stored in the imgs directory.  A collection of PDF files that correspond to specific combinations of user input are all stored in a file directory named pdf.  The paths to these directories are referenced in html and js files and must be changed accordingly if the site is expanded.  Plans to offer more tour packages to additional destinations and to house all related files on a separate server are examples of conditions that will require making changes to these paths.


Tour package price calculations occur in the code within the activities.js file.  As prices fluctuate or increase over time, the base price variables and price modifiers should be adjusted in that file.



Fade in and out script integrates code from:
http://css-tricks.com/examples/SimpleSlideshow/
