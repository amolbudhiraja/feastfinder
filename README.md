# Inspiration
FeastFinder was born from a frustration with the traditional food discovery process. We noticed that finding small, local restaurants that offered unique and authentic dining experiences took much work. We wanted to redesign the process to connect users with their community better and provide them with a more personalized and enjoyable food discovery journey. With FeastFinder, we use the latest machine-learning technology to recommend local restaurants and bring the joy of food discovery back to the forefront.

# What it does
FeastFinder first asks users to take a quiz where it stores and analyzes user preferences to recommend three local and small restaurants. It uses a KNN classifier to find the closest restaurants from its large pool of small restaurants and then returns the most similar to the user's preferences by euclidian distance. Then it provides the users with detailed information about each place such as their hours, directions, a description about the place, and its most popular menu items. This is information had either been compiled in our dataset, calculated using the Google Maps API, or generated using the Open AI GPT-3 API.

# Instructions
To run this project locally, first `git clone` this repository. Then run `npm install` to install all of the npm dependencies as specified in the `package.json` file. Finally add the necessary environment variable(s) (`OPEN_AI_API_KEY`) in a `.env` file.  Then, use the comman `npm run start` to run the program locally on `localhost:3000`. (Note: NodeJS and NPM are required to be installed on your machine in order to run the program) 

# How we built it
We built our application with React and Javascript. We decided to make our application a front-end application as we are working with mostly static or API-based data. We first compiled and created a dataset of small restaurants around Los Angeles and assigned them specific values. We then designed a quiz and constructed a vector of the user preferences. Then we designed a KNN classifier to classify the most similar restaurants by using the euclidian distance between the user preferences and each restaurants as a heuristic. After we get the recommendations, we then source information about the restaurants from our dataset, Google Maps API, and Open AI GPT-3 API and display this information as a view for the user.

# Challenges we ran into
Throughout the process we ran into numerous bugs or issues that we had to overcome in order to complete our project. Most significantly, we had frequently exceeded the rate limits on our APIs due to frequent testing and repeated API calls. Hence, we had to optimize our code to minimize the number of API calls it makes. Accordingly, we are now able to comfortably stay within the rate limits.

# Accomplishments that we're proud of + What we learned
We are very proud of our project! We worked very hard throughout the time and really enjoyed working as a team. Specifically, we are very proud of the following achievements:
* Creating the KNN Classifier. We designed it to optimize speed and efficiency.
* Creating an easy-to-use, simple, and intuitive user interface.
* Learning and leveraging new technologies like the Open AI GPT-3 API and the Google Maps API.
* Making our code very efficient and compact.

# What's next for Feast Finder
Next steps for our application include:
* Increase our dataset and add more local small businesses.
* Add a realtime video-based translation feature to aid people visiting restaurants with menus in foreign languages.
* Add Doordash API integration to allow in app ordering of food.
