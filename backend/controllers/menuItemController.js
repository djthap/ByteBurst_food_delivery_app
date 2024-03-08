const cloudinary = require('cloudinary');
const { MenuItem } = require('../models/menuItem');
const multer = require('multer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'db4apiuz9',
  api_key: '393969134613339',
  api_secret: '8MWM_jIXVEhUYPsCQuqvrLcd9iY'
});

// Multer configuration for file upload
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage }).single('image');

// Controller methods
const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate('category',"category_name") 
    .populate('createdBy', 'name');
    console.log(menuItems)
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getRandomMenuItems = async (req, res) => {
  try {
    const randomMenuItems = await MenuItem.aggregate([
      { $sample: { size: 3 } } 
    ]);

    res.status(200).json(randomMenuItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



const createMenuItem = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to upload image' });
      }
      const token = req.header('Authorization');
      const decoded = jwt.verify(token, 'this-is-our-web-app');
    
const createdBy= decoded.user.id;
      

      const { image, name, description, category, basePrice, sizes, extraIngredientPrices  } = req.body;

      const imageUrl = await cloudinary.uploader.upload(req.file.path);
      const menuItem = new MenuItem({
        image: imageUrl.secure_url,
        name,
        description,
        category,
        basePrice,
        sizes,
        extraIngredientPrices,
        createdBy
      });
      await menuItem.save();
      fs.unlinkSync(req.file.path);
      res.status(201).json({ message: 'MenuItem created successfully', menuItem });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name, description, category, basePrice, sizes, extraIngredientPrices } = req.body;
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      id,
      { image, name, description, category, basePrice, sizes, extraIngredientPrices },
      { new: true }
    );
    if (!updatedMenuItem) {
      return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json({ message: 'MenuItem updated successfully', updatedMenuItem });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenuItem = await MenuItem.findByIdAndDelete(id);
    if (!deletedMenuItem) {
      return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json({ message: 'MenuItem deleted successfully', deletedMenuItem });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Exporting controller methods
module.exports = {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenuItemById,
  getRandomMenuItems
};
