const BookModel = require("../models/book");

const getBooks = async (req, res) => {
    try {
        const data = await BookModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createBook = async (req, res) => {
    const { title, author, image, description, price ,isbn} = req.body;
    try {
        const newBook = await BookModel.create({ title, author, image, description, price ,isbn});
        res.status(201).json({ message: "Book created successfully", book: newBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, image, author, price, description, isbn } = req.body;
    try {
        const updatedBook = await BookModel.findByIdAndUpdate(
            id,
            { $set: { title, image, author, price, description, isbn } },
            { new: true } 
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book updated successfully", book: updatedBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getBooks,
    createBook,
    deleteBook,
    updateBook,
};
