import React, { useState } from 'react';

function CreateRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would send a POST request to your server with the form data
        // For example, using the fetch API:
        
        fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, ingredients: ingredients.split(','), instructions }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
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
