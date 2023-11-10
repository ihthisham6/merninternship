const express = require("express");
const router = express.Router();
const Recipe = require('../Models/recipeModel'); // Assuming you have a Recipe model defined
const StudentController = require("../Controllers/studentController");

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent)
// Create a new recipe
router.post('/recipes', async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        await recipe.save();
        res.status(201).send(recipe);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Read all recipes
router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.send(recipes);
    } catch (e) {
        res.status(500).send();
    }
});

// Read a specific recipe by id
router.get('/recipes/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const recipe = await Recipe.findById(_id);
        if (!recipe) {
            return res.status(404).send();
        }
        res.send(recipe);
    } catch (e) {
        res.status(500).send();
    }
});

// Update a recipe by id
router.patch('/recipes/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send();
        }
        updates.forEach((update) => recipe[update] = req.body[update]);
        await recipe.save();
        res.send(recipe);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete a recipe by id
router.delete('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).send();
        }
        res.send(recipe);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;






















