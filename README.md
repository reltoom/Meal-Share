# Meal Share React Front-End

This is my Front-End for my PP5, Meal Share. 

Visit the live deployed site here: [Meal Share](https://meal-share-b5f074a2fcfd.herokuapp.com/).

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)
  * [Planning Process](#planning-process)
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Future Implementations](#future-implementations)
* [Features](#features)
* [Technologies](#technologies)
  * [Languages](#languages)
  * [Websites & Programs](#websites-programs)
* [Deployment](#deployment)
* [Testing](#testing)
   * [Manual Testing](#manual-testing)
   * [Validator Test](#validator-test)
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Acknowledgments](#acknowledgments)

## User Experience

### User Stories

### Planning Process

## Design

### Colour Scheme

### Future Implementations



## Technologies 

### Languages
* React with JSX - for site funcitionality and resuablity.
* HTML5 - Provides the content and structure for the Meal Share.
* CSS - Provides the styling for the Character Share.


###  Websites & Programs 

* [DjangoREST framework](https://www.django-rest-framework.org/)Guide and reference for code.
* [Github](https://github.com/) - Created repository and stored files here after commits. 
* [Heroku](https://heroku.com/) - For deploying both the Back-End and Front-End of Meal Share.
* [Microsoft Visual Studio](https://visualstudio.microsoft.com/) - Wrote code and did commits to Github from here.
* [W3 School](https://www.w3schools.com/) Read and used as a guide for some code.
* [Chatgpt](https://chat.openai.com/) - Used to help identify problems in code and possible way to solve them.


## Deployment 
Here I will describe the deployment procedure for the Front-End of Meal Share.

1. In your Github create a new repo instead of using the CI template as normal.
    * Go to your Repos page and click the green 'new' repo button.
    * Choose a unique name(Meal Share in this case) and scroll to bottom of page and click 'Create'.
2. Setting up React.
    * Open your workspace for the new repo in with the platform you use.
    * In the terminal create your React app with: "npx create-react-app . --use-npm".
    * This will install all needed packages for React.
    * Save your workspace, add, commit and push to GitHub.
3. Deploying in Heroku.
    * Log into your Heroku account and go to the Dashboard.
    * Click 'New' --- 'Create new app'
    * Choose a unique name for your app and your region, then click 'Create App'.
    * You do not need any Config Vars here. To connect this with your Back-End, you need the add the CLIENT_ORIGIN to Config Vars on the Back-End Heroku,with the value of your deployed front-end Heroku URL address. Then create an api folder with axiosDefualt.js in your 'src' directory. In this file add: 'axios.defaults.baseURL = "..."' with the ... being your Back-End URL from Heroku.
    * Go the the Deploy tab and under Deployement Method, click to connect to your Github account.
    * Search for you repo that you created in step 1 and then 'Connect'
    * Click the 'Manual Deploy' to deploy manually after every update on GitHub, or you can activate the 'Automatic Deployement' which will try to deploy after every new push to GitHub.
    * Now that it is deployed, you can click on the 'Open App' button in the top right hand off the screen in Heroku.

#### How to Fork in Github

If you want to fork this repository in Github:

1. Go to the repository for this project [Meal-Share](https://github.com/reltoom/Meal-Share).
2. In the upper right hand area of the screen, click the 'Fork' button.
3. Then when the menu drops down, click 'Create New Fork'. (If you are the owner of a repository, you cannot fork.) 

#### How to Clone in Github

If you want to clone this repository:

1. Go to the repository for this project [Meal-Share](https://github.com/reltoom/Meal-Share).
3. Click on the green 'Code' button and then select how you would like to clone: HTTPS, SSH or GitHub CLI (under the 'local' tab). 
4. Either copy the desired code or click to open with another program from the list below the code.
4. Open your code editor and go to 'Clone Repository' usually under 'File'.
5. Paste if your code and then 'Clone'.

## Testing
## Manual Testing
I did manual testing for Meal Share.
This is included in a separate file [here](testing.md). 

## Validator Test

[W3C](https://validator.w3.org/) is used to validate the HTML for Character Share, there are no errors. 1 warning about article lacking heading on the About page.

[JShint](https://jshint.com/) is used to validate the Javascript for Character Share. No errors.

## Credits

### Code Used
I used the Back-End code from the Moments walkthrough and then changed it to fit Meal Share. 

### Acknowledgments
Thank you to my daughter and wife for helping support me through my studies.
