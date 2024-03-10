import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ExtraPrice.css';

function ExtraPrice() {
  const [extraPrices, setExtraPrices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchExtraPrices();
  }, []);

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
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/extraPrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to create extra price');
      }
      const data = await response.json();
      setExtraPrices([...extraPrices, data]);
      setFormData({ name: '', price: '' });
    } catch (error) {
      console.error('Error creating extra price:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/extraPrice/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete extra price');
      }
      setExtraPrices(extraPrices.filter((extraPrice) => extraPrice._id !== id));
    } catch (error) {
      console.error('Error deleting extra price:', error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleEditSubmit = async (id, newName, newPrice) => {
    try {
      const response = await fetch(`/api/extraPrice/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, price: newPrice }),
      });
      if (!response.ok) {
        throw new Error('Failed to update extra price');
      }
      setEditingId(null);
      fetchExtraPrices(); // Refresh the list
    } catch (error) {
      console.error('Error updating extra price:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="create-extra-price-section">
        <form className="create-extra-price-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="extra-price-list-section">
        <ul className="extra-price-list">
          {extraPrices.map((extraPrice) => (
            <li className="extra-price-item" key={extraPrice._id}>
              {editingId === extraPrice._id ? (
                <>
                  <input
                    type="text"
                    defaultValue={extraPrice.name}
                    ref={(input) => input && input.focus()}
                    onBlur={(e) =>
                      handleEditSubmit(
                        extraPrice._id,
                        e.target.value,
                        extraPrice.price
                      )
                    }
                  />
                  <input
                    type="number"
                    defaultValue={extraPrice.price}
                    onBlur={(e) =>
                      handleEditSubmit(
                        extraPrice._id,
                        extraPrice.name,
                        e.target.value
                      )
                    }
                  />
                </>
              ) : (
                <>
                  <span>{extraPrice.name}</span>
                  <span>{extraPrice.price}</span>
                </>
              )}
              <button onClick={() => handleEdit(extraPrice._id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(extraPrice._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExtraPrice;
