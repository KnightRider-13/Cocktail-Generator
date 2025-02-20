Random Cocktail Generator 🍹 

A Node.js and EJS project that generates a random cocktail, perfect for when you're learning backend development and want to mix a little fun with code! 

  

Table of Contents 📖 

About the Project 

Features 

Tech Stack 

Getting Started 

Screenshots 

Contributing 

Contact 

License 

  

1. About the Project 📝 

This Random Cocktail Generator fetches data from TheCocktailDB API to suggest a random cocktail, including its ingredients, measurements, and preparation method. 

  

Purpose: 

Built while learning Node.js and EJS, this project showcases server-side rendering and dynamic content generation. 

  

2. Features ✨ 

Fetches random cocktails from an external API. 

Displays detailed information about the cocktail, including: 

Name 

Category 

Ingredients with measurements 

Preparation instructions 

User-friendly interface with a "Choose Your Poison" button to start and a "Try Again" button for refreshing. 

 

3. Tech Stack 🛠️ 

Frontend: EJS, CSS 

Backend: Node.js, Express.js 

API: TheCocktailDB API 

  

4. Getting Started 🛠️ 

Prerequisites: 

Node.js installed on your machine. 

Basic understanding of Node.js and server-side rendering. 

Installation Steps: 

1. Clone the repository (bash): 
  ```bash
   git clone https://github.com/yourusername/random-cocktail-generator.git  
   cd random-cocktail-generator
  ```

2. Install dependencies: 
  ```bash
   npm install
  ```
 
3. Start the development server: 
  ```bash
   npm start
  ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
 

Code Highlights 🔍 

Node.js API Integration: 
```javascript
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const getRandomCocktail = async () => {
  try {
    const result = await axios.get(API_URL);
    const cocktail = result.data.drinks[0];
    return cocktail;
  } catch (error) {
    throw new Error("Error fetching data from API");
  }
};
```


EJS Template Logic for Ingredients: 

```ejs
<% for(let i = 1; i <= 15; i++) {%>
  <% const ingredient = cocktail[`strIngredient${i}`]; %>
  <% const measure = cocktail[`strMeasure${i}`]; %>
  <% if (ingredient && measure) {%>
    <li><%= measure %> <%= ingredient %></li>
  <% } %>
<% } %>
```

5. Screenshots 📸 

![Cocktail Generator Home](https://github.com/user-attachments/assets/52b80939-1b94-43eb-90e3-65f25f92aa53)


![Cocktail Generator](https://github.com/user-attachments/assets/f5448c7d-9376-4a03-9615-fd997fb71324)

   

6. Contributing 🤝 

Contributions are welcome! To contribute: 

Fork the repository. 

Create a new branch (git checkout -b feature/YourFeature). 

Commit your changes (git commit -m 'Add YourFeature'). 

Push to the branch (git push origin feature/YourFeature). 

Create a pull request. 

7. Contact 📧 

Ismaa'eel – www.linkedin.com/in/ismaaeel-fahmay – fahmay17@gmail.com

  

8. License ⚖️ 

This project does not have a license. If you'd like to use the code, please contact me for permission.   
