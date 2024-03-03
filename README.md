
## Test environment
The Cypress tests were run with the following settings:

      * node -v: v20.11.1
      
      * npm -v: 10.5.0
      
      * Cypress package version: 13.6.6
      
      * Cypress binary version: 13.6.6
      
      * Electron version: 27.1.3
      
      * Bundled Node version:18.17.1
      
      * Browser: Chrome
      
      * Operating System: Windows 11

Please run the following commmand to execute the test suite : 

npx cypress run --spec "cypress/e2e/My tests/*.cy.js"

## Test scenarios

Test Environment
Browsers: Edge, Chrome, Firefox, Safari
OS: Windows, Mac, Linux
Devices: PC, Mac, android, iOS


 
* Checking for the ‘Back to all templates’ link	(Automated yes)
* Checking for all the checkboxes getting checked and data being accumulated accordingly	(Automated yes)
* Checking each checkbox and making sure right data is displayed	(Automated No)
* Checking checkboxes and clicking on clear all	(Automated yes)
* Checking for the state of the checkboxes with browser’s back button	(Automated yes)
* Checking the search field with blank input	(Automated yes)
* Checking the blank field with minimum and maximum input values	(Automated No : the values weren’t known)
* Checking search field with browser’s back button	(Automated yes)
* Switch logo :cancel	(Automated yes)
* Switch logo: continue	(Automated yes)
* Switch logo: select a new logo then hit cancel	(Automated No)
* Switching a logo and signing out to see if the changes are saved (Automated No)
* Upgrade account	(Automated :Partial)
* Submitted values to upgraded account to verify	(Automated No)
* Click edit on a post	(Automated yes)
* Click view collection	(Automated yes)
* Click load designs	(Automated No)

### Suggestions: 
1. The rotate button editing an image doesnt function. The functionality can be made available for better user experience. 
2. The search field accepts every character and value. Restrictions can be put into place to blacklist certain characters for added security. 
3. The sizing of the templates can be made uniform to make it more user-friendly. 
4. A field can be added at the bottom of the page to allow user to choose the number of templates they wish to see at any given time. 


### ** Note: **
**1. When the link was clicked, it didnt require me to enter my credentials. So, i worked around it (bug) assuming that this is how the page was set up for me.**
**2. I pushed the changes directly to the master because it was my own repo. Normally i would push it to a branch and then merge it to develop/master**
