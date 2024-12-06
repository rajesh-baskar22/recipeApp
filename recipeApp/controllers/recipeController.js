 const Recipe =require('../models/Recipe');


exports.createRecipe = async (req, res) => {
    try {
      const { title, ingredients, instructions } = req.body;
      const recipe = new Recipe({ title, ingredients, instructions });
      await recipe.save();
      res.status(201).json({ message: 'Recipe created successfully', recipe });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  exports.getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 
  exports.getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.updateRecipe = async (req, res) => {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json({ message: 'Recipe updated successfully', updatedRecipe });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 
  exports.deleteRecipe = async (req, res) => {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };