# Google Autocomplete React || [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/harman6666/google-autocomplete-react)
------------

Introduction
------------

This is not just a google autocompletion it is moreover a small webapp for searching and getting nearby places with the help of Google Maps. It was written with ReactJS. Please have a look below to get more details regarding this webapp.
 
Components
------------
- Having a header with proper logo and links
- Having a footer with some default description
- Having a navigation component which displays the links to navigate across the project.
- Having a home page which asks for a name of the user who runs the project.
- Having a welcome page which welcomes the user by getting a name from the home page.
- Having a google maps page where the user can search any place around the world and get nearby places.
- Having a 404 error page which will display only when React not able to find a particular component attached to the router.

Architecture Details
------------
- Imagine for a moment an app with only one file for all your components, the store, utilities, everything.
A terrible idea, of course. The problem with the large number of files is to navigate them.
So, For this reason I structured the application in a effiecent manner.
##### Directory Structure :-
![directory-structure](https://s17.postimg.cc/hk9wkwl8v/Quandoo4.png)

- As you can see in the above screenshot we have different folders for different components and every component have index.js file because this is the default file and when we run the application this file will automatically call when we import this folder in any other component.
- Made separate folder for test files with "__" in the starting and ending because jest will automatically pick all the files inside this folder(there is a configuration in the webpack) and run tests written in these files. 

Functionalities
------------

- Asynchrosnly getting the google maps API by using script loader function. So, it will not block any other call.
- Fully functional google maps integration.
- Also, added geolocation for getting the user location if they allow from the browser.
- If user *accepts*, the capturing of user location by the browser then they will see a marker at there current location.
- Or, if user *declines* the capturing of the user location by the browser then they will be able to see the Berlin address by default :)
- A user can search any place by typing in the text box given at top left corner of the Map.
- Once the user clicked on the place from the drop-down, they can be able to see the place on the map with the nearby Hotels and Resturants within 5000 m radius. Additionally, the user can also get the detailed information on the popup regarding the place they entered.
- A user can close the popup.
- A user can be able to see multiple icons as per the particular place details e.g. Restaurant will be having fork and spoon icon.
- A user can tap on any of the marker/icon on the map to get the information about the place.
- A user can go in full-width view for getting a bigger display(All the other functionalities will remain same).
- Implemented Router to browse other pages flawlessly without reloading the page(Single page architecture).
- Implemented welcome animation which will capture the name from the home page. If user not enters anything and hit enter then by default __Champian__ name will be shown on the welcome page.
- A __Fully responsive__ webpage.
- __​....​phhhhhew__, that was a long list. Is not it? Why not you go to the below steps and have a look into the webapp.

Installation
-------------

- Clone/Download the repository by using [Github Link](https://github.com/harman6666/google-autocomplete-react.git)
- After the 1st step _run __npm install___ in the project folder.
- After all the necessary packages got installed then _run __npm start___ the command prompt.
- We can also build the project for the production release by using __npm build__ command.
- Yeah, that's it. Enjoy the webapp.

Some Examples/Screenshots
-----------

![home-screen](https://s17.postimg.cc/imk33fwcf/Quandoo1.png)

![google-map](https://s17.postimg.cc/f2y5dn927/Quandoo3.png)

![404-page](https://s17.postimg.cc/baemxk6b3/Quandoo5.png)


Some NPM commands for reference
---------------

- __npm start__ starts the development server and auto-reloads the page any time you make edits
- __npm run__ build bundles the app into static files for production
- __npm test__ starts the test runner and lets you test your app with Jest as you build it.

Enhacements which can be done
----------------

- Google Maps styling can be done by adding multiple styling options for the user to select.
- Test cases can be improved.
- Direction services can be implemented.
- By searching for a place, more result data to be displayed on the popup e.g. photos of the place, etc.
- Seperate the results based on there type in the dropdown e.g. if user searchs for a hotel then those will be in a different block and other like cities will be in other block.
- Some more animation can be applied.


### Thanks !




