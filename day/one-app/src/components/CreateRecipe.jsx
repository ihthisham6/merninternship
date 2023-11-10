import React, { useState } from 'react';
import axios from 'axios';

function CreateRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/recipes', { title, ingredients: ingredients.split(','), instructions })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            </label>
            <label>
                Ingredients (comma separated):
                <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} required />
            </label>
            <label>
                Instructions:
                <textarea value={instructions} onChange={e => setInstructions(e.target.value)} required />
            </label>
            <button type="submit">Create Recipe</button>
        </form>
    );
}

export default CreateRecipe;
