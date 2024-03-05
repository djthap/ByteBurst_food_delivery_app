import React, { useState } from 'react';
import axios from 'axios';



function CreateMenuItem() {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    category: '',
    basePrice: '',
    sizes: [],
    extraIngredientPrices: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/menuItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to create menu item');
      }
      const data = await response.json();
      alert("created successfully")
      console.log(data); // handle success
    } catch (error) {
      console.error('Error creating menu item:', error); // handle error
    }
  };
  

  return (
    <div>
      <h2>Create Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />

        <label>Base Price:</label>
        <input type="number" name="basePrice" value={formData.basePrice} onChange={handleChange} />

        {/* Additional fields can be added for sizes and extra ingredient prices */}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateMenuItem;
