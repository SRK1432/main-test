import React, { useState } from 'react';
import './AddCategory.css';

const AddCategory =()=> {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit= (e)=> {
        e.preventDefault();
        console.log("Category Added:", categoryName, description);
        setCategoryName('');
        setDescription('');
    };

    return (
        <div className="add-category">
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Category Name" 
                    value={categoryName} 
                    onChange={(e) => setCategoryName(e.target.value)} 
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
