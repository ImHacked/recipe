import {React,useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import Header from "./Header";

function App() {
    
    const APP_ID="3069e377";
    const APP_KEY="53e408e6cfe8be637ca8dc6905aea6c4";

   


  
    const [recipes,setRecipes]= useState([]);
    const [search,setSearch]=useState("");
    const [query,setQuery]=useState('chicken')


    useEffect(() => {
      
      const getRecipes=async()=>{
        const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data= await response.json();
        setRecipes(data.hits);
      }

      getRecipes();
    
      
  }, [query]);



  const updateSearch=e=>{

    setSearch(e.target.value);

  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  


  return (
    <div className="App">
     <Header></Header>
    <form onSubmit={getSearch} className="search-form" >
    <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search Recipies by main ingradient e.g Chicken" />
    <button className="search-button" type="submit" >Search</button>
       
      
    </form>
    <div className="recipe">

    {recipes.map(recipe=>(
      <Recipe title={recipe.recipe.label} url={recipe.recipe.url} image={recipe.recipe.image} ingri={recipe.recipe.ingredients} />
    ))};
    </div>
   
    
    </div>
  );
}

export default App;
