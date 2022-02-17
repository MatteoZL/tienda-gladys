import Order from "../models/Order";
import createPDF from "../libs/pdf-creator";
import { uploadImage } from "../libs/cloudinary";

export const createOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    const order = new Order({
      products,
      total,
      user: req.userId,
    });
    const path = await createPDF(order);
    order.file = await uploadImage(path);
    await order.save();
    res.status(200).json({
      message: "Order saved successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const readOrder = async (req, res) => {
  try {
      const id = req.params.id;
      const order = await Order.findById(id);
      res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({user: req.userId});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
          });
    }
};