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
| | | |
|:-------:|:--------|:--------|
| Clicking on 'Sign up' takes me to a sign up page | Clicked on sign up | Took me to a signup form. |
| Can I leave form blank | Tried to create with blank fields | Error messages show that I need to fill in fields. |
| Testing all fields in sign up form | Tried not matching passwords, or just blank spaces | Error messages still show that I need to fill in fields or that passwords do not match. |
| Clicking 'Sign up' will create an account | Clicked on Sign up after filling fields | System created an account and message and took me to the sign in page. |
| Clicking on 'Sign in' takes me to a sign in page | Clicked on sign in | Took me to sign in form. |
| Can I leave form blank, sign in | Tried to sign in with blank fields | Error messages show that I need to fill in fields. |
| Testing all fields in sign in form | Tried with wrong password and wrong username | Error messages show that I need to fill in fields or that I have wrong username or password. |
| Signing in | Filling out input correctly and clicked sign in | Took me to the home page and updated navbar to the 'logged in' version. |
| Signing Out | Click on Sign out | User will get a message to confirm if they want to log out. |
| Navbar function | Clicking on the different links on the navbar | Each link takes me to the correct page, as expected. |
| Most followed profiles | Clicking follow and then unfollow | Clicking the follow and unfollow in this area, updates all follow counts correctly. |
| Clicking on the most followed while viewing the 'Followed' page. | Clicking the Follow and Unfollow on this page does not update the feed, one has to refresh manually | This will come in a future deployment. |
| Heart/like button | Clicking the heart, likes the post | Like count is updated properly and added to your Liked page. |
| Unliking on the Liked page | Clicking the unlike button while in the Liked page does not remove it from the page | This will come in a future deployment. |
| Search Bar | Typing key words, or users to search for posts | Search field correctly retrieves posts for what user has typed. |
| Comments bubble and post image | Clicked on the comment bubble and the posts image | Both take user to the Post page and if logged in, can comment. |
| Add Post Form | Clicking Link to Add Post | Takes me to the Add a Post form correctly. |
| Cancel Button-Add Post | Click the Cancel button | Correctly takes user back to 'Home' page. |
| Create button - empty fields | Click the create button without filling in form fields | Correctly informs user that the Recipe Name is required. |
| Add Post Form | Only the Recipe name is required | It is possible to create a post with nothing but the recipe name, though not a very engaging post. |
| Upload image | Click the upload image and attach a photo | Error messages for too large file or too long file name come up correctly. |
| User's own posts | Click on a post that is the user's(when logged in) shows 3 dots with Edit or delete | Clicking Delete will throw up a question of confirmation to the user, clicking edit will bring up the Add Post form, but prefilled in with the Posts data. Buttons show correctly 'Update' 'Cancel'. |
| Comment Edit | Click Edit button | Comment field changes so you can edit it, Save saves it and updates the comment, Cancel takes user out of editing. |
| Comment Delete | Click on 'delete' for comment | Throws up a confirmation message if user wants to delete. Deleting works. |
| Writing comment | Write a comment and 'Post' | If the user types something then it is possible to 'Post' the comment, If blank or just space..then nothing happens, future development will give a message to save please fill in comment. |
| Recipe-Books link | Click on Recipe-Books | Takes user to the correct site with list of recommend books to the left and a add book for to the right. |
| Add Book Form | Title and Author are required to add book | Not filling in form fields notifies user that it needs to be filled in. Filling in correctly users is able to click on 'Add Book' which properly creates and updates the list of books |
| Delete Book | If it is a book the user created, they can edit or delete it. Click delete | User will receive a message to confirm deletion, then deletes correctly |
| Edit Book | Click on Edit book | Correctly pre fills in the book form on the right hand side of the screen. Able to 'Cancel' which clears form or edit and update, which clears form and update Book post. |
| Surprise Me page | Click the 'Surprise me!' button | Clicking the button will randomly generate a Postpage view of one of the posts. |
| Profile Page | Clickthe profile page link or on a profile picture and name | Clicking on either of these will take the user to the corresponding Profile page. Counts for posts, followers and following update correctly. Shows users posts correctly as well. |
| Edit Profile Options | When user is on their own profile page, 3 options for editing profile are there. | The 3 dots bring up correct menu options, Edit profile, change username, or change password. |
| Edit Profile | Click edit profile | Brings up the edit profile page where one can upload new profile image and write a bio. Save and Cancel work as expected. |
| Change Username | Click 'change username' | Brings up the change username form and Saving and Canceling work correctly. |
| Change Password | Click the 'Change password' | Typing in a new password 2 times changes the current users password. Save and Cancel work as expected. |


## Validator Test

[W3C](https://validator.w3.org/) is used to validate the HTML for Character Share, there are no errors. 1 warning about article lacking heading on the About page.

[JShint](https://jshint.com/) is used to validate the Javascript for Character Share. No errors.

## Credits

### Code Used
I used the Back-End code from the Moments walkthrough and then changed it to fit Meal Share. 

### Acknowledgments
Thank you to my daughter and wife for helping support me through my studies.
