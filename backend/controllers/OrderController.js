const Order = require('../models/Order.js');

exports.createOrder = async (req, res) => {
    try {
        const { phoneNumber, address, cardHolderName, cardNumber, cvv, expiryDate, items, totalPrice } = req.body;

       if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: 'Items array is empty or not properly formatted' });
        }

        const order = new Order({
            phoneNumber,
            address,
            cardHolderName,
            cardNumber,
            cvv,
            expiryDate,
            totalPrice,
            items, 
            status: 'pending', 
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items'); 
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
