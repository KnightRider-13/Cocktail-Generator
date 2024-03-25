import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));

const getRandomCocktail = async () => {
  try{
    const result = await axios.get(API_URL);
    const cocktail = result.data.drinks[0];
    return cocktail
  }
  catch (error){
    throw new Error("Error fetching data from API");
  }
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    cocktail: null,
  });
});

app.post("/random", async (req, res) => {
    try{
    const cocktail = await getRandomCocktail();
    res.render("index.ejs", { cocktail });
    }
    catch (error){
      res.status(500).send("Error fetching data from API");
    }
    
})

app.get("/refresh", async (req, res) => {
  try{
    const cocktail = await getRandomCocktail();
    res.render("index.ejs", { cocktail });
  }
  catch (error){
    res.status(500).send("Error fetching data from API");
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
