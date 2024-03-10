import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

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

  const [categories, setCategories] = useState([]);
  const [extraPrices, setExtraPrices] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchExtraPrices();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchExtraPrices = async () => {
    try {
      const response = await fetch('/api/extraPrice');
      if (!response.ok) {
        throw new Error('Failed to fetch extra prices');
      }
      const data = await response.json();
      setExtraPrices(data);
    } catch (error) {
      console.error('Error fetching extra prices:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const handleSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedItems = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setFormData({
      ...formData,
      [name]: selectedItems
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image', formData.image);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('basePrice', formData.basePrice);
      formDataToSend.append('sizes', JSON.stringify(formData.sizes));
      formDataToSend.append('extraIngredientPrices', JSON.stringify(formData.extraIngredientPrices));

      const response = await fetch('/api/menuItem', {
        method: 'POST',
        body: formDataToSend
      });
      if (!response.ok) {
        throw new Error('Failed to create menu item');
      }
      const data = await response.json();
      alert("created successfully")
      console.log(data); 
    } catch (error) {
      console.error('Error creating menu item:', error); 
    }
  };

  return (
    <div>
      <h2>Create Menu Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} accept="image/*" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category:</Form.Label>
          <Form.Select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.category_name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Base Price:</Form.Label>
          <Form.Control type="number" name="basePrice" value={formData.basePrice} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sizes:</Form.Label>
          <Form.Select multiple name="sizes" value={formData.sizes} onChange={handleSelectChange}>
            {extraPrices.map(extraPrice => (
              <option key={extraPrice._id} value={extraPrice._id}>
                {extraPrice.name} - {extraPrice.price}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Extra Ingredient Prices:</Form.Label>
          <Form.Select multiple name="extraIngredientPrices" value={formData.extraIngredientPrices} onChange={handleSelectChange}>
            {extraPrices.map(extraPrice => (
              <option key={extraPrice._id} value={extraPrice._id}>
                {extraPrice.name} - {extraPrice.price}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
}

export default CreateMenuItem;
