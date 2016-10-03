## Campers of FCC

### Installation and loadup
You need to have node and git installed to run this application.   
When you've installed node, you can clone(download) this repository(folder) by entering this command into your console:  

git clone git@github.com:mmhansen/campers-of-fcc.git campers-of-fcc && cd campers-of-fcc  
git fetch  
git checkout development  

To run the server locally which will load the application enter:  
npm install  
webpack -w  

In a separate terminal window enter:   
npm start   

Now open your browser and go to http://localhost:3000  
As you make changes to the files, you will not have to touch the terminals, simply reload your webpage after saving.  

### Usage   
Now you can open your text editor of choice and make changes to the files within the 'app' folder.  
This is a React app, meaning that first, all of the html is split into 'components' with some accompanying javascript.  
The javascript may be unfamiliar, but we will have a walkthrough when the project is done.  
For now, focus on the parts that seem familiar to you.   
You can find the HTML you know in the render function in each component.  
For most of the front end you will be dealing with styling the html elements.  
Find the html element in the component you want to change and then notice that 'class' has now become 'className'  
You are free to change the classes for the most part.  
You will find the corresponding css in the stylesheets folder. The css for each page has been broken down into partial stylesheets, but  please remember that these will all become one sheet when the application is made, so be mindful that you don't overlap other classes.  

###If you need help, you can contact either codejunky or myself, mmhansen.   

If you are comfortable with the instructions and github and want to make a pull request, please do so.  
If you are a little newer and this is still confusing(which is fine!) please contact us; we will take your html and css files, and apply the styling and structure to the best of our ability.   

### As a user I can     
