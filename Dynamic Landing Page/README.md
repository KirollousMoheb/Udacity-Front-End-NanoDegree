# Landing Page Project

# Table of Contents
1. INTRODUCTION
2. DEVELOPMENT
3. EXTRA FEATURES
4. CODE EXPLANATION
5. CONCLUSION


##Introduction
This is a dynamic landing page created using HTML,CSS,JS and no frameworks were used. If any more Sections is added the Navbar List is 
updated.An active class is added to the active section and its corresponding navbar list item. 


##Development
Most of the changes are done in the app.js file and I added some changes to the css file.
**The file must open with Internet connectionas the button that scrolls up to the top of the page is using Font 
Awesome icons as well as for google fonts.**


##Extra Features
*The navbar will only show if the user moved the mouse or scrolled and if not it will be visible for some time then hidden.
*There is a scroll to top button on the buttom left,it becomes visible when the user reaches the page fold
*An active State is added to the navbar list items corresponding to the active section
*There are five sections present ,i tested the dynamicity of the navbar by adding more sections.



##Code Explanation
*To detect the visibility of the section i wrote isvisible function that gets each section dimensions,the height and width of the screen
and compare them to the dimension of the section if most of the section's part is visible the function returns true
*using scroll into view to scroll to the wanted section when any navbar item is clicked 
*Used For of loops and Let,Const as mentioned in ES6
*The rest of the function is well explained in the app.js file

##CONCLUSION
This project has been enhanced with dynamic generated Navigation list (based on the sections) in an unordered list as well as scolling to the section
