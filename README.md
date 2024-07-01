# Meal Share React Front-End

This is my Front-End for my PP5, Meal Share. 

Visit the live deployed site here: [Meal Share](https://meal-share-b5f074a2fcfd.herokuapp.com/).
![Am I Responsive Screenshot](./src/assets/readme/images/responsive.png)

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Site Goals](#site-goals)
  * [Planning Process](#planning-process)
  * [User Stories](#user-stories)
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
### Site Goals
Meal Share is to be a site for all types of food lovers to come and share their favorite recipes and recipe books. Here user can interact with others: comment, like and follow each other and posts. If you are stuck on what to cook for dinner again... go to the Surprise me page and it will choose a random Post/Recipe for you. 
### Planning Process
Meal Share follows the Moments walkthrough structure, but is customized to be something different. Baslamiq was used to create original wireframes.

![Wireframes](./src/assets/readme/images/wireframes.png)

I wanted a more complex form for Post creation. Originally I had planned to do a nested serializer and spent several days trying to get it to work, but as I was told by a tutor eventually that nested serilizers were not supported by DRF, atleast how I was trying. Custom code would have been only workaround. So I had to start over and add on simple. After that I added on the Book page for recommend recipe books as that is another way to help people discover cooking ideas.

### User Stories

## Design

### Colour Scheme
I choose shades of green for my color scheme because green is fresh. The background had to be dialed back and so I went with Ash gray, as it has a slight hint of green but light enough to not be overpowering. To highlight certain area of content, I went with a lighter version of Ash gray and used Honeydew. I decided to go with Red Cancel buttons so user is fast aware that something will not happen with those buttons and are easily differentiated from the Green Add/Save buttons.

![Wireframes](./src/assets/readme/images/colors.png)

### Future Implementations
In the future I would like to incorporate sevearl ideas.
  * Nested serializers--Ingredients section would have its own creation area within a create Post. User could add and remove ingredients, write quantity from a integer field, write ingredient name from a text field and choose a measurement from the select menu. 
  * Users will be able to select more than one Meal Type if they so wish.
  * Surprise page will have a filter for liked, followed, or chosen meal types.
  * In the profile page, the user would get a notification if someone has commented on their post.


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

[W3C](https://validator.w3.org/nu/) is used to validate the HTML for Meal Share, there are no errors. 
[JShint](https://jshint.com/) is used to check the JSX code for Meal Share. Mostly refererences to ES6, but no errors.

## Credits

### Code Used
I used the basic set up from the Momements walkthrough and then have revised and edited to become Meal share. 

### Acknowledgments
Thank you to my daughter and wife for helping support me through my studies.
