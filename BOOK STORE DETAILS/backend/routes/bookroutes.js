const express = require("express");
const { getBooks, createBook, deleteBook, updateBook } = require("../controller/bookcontroller");

const bookRouter = express.Router();

bookRouter.get("/get", getBooks);
bookRouter.post("/post", createBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.patch("/update/:id", updateBook);

module.exports = bookRouter;
