import mongoose from 'mongoose';

const bookSchema= mongoose.Schema({
    name :String,
    title :String,
    price :Number,
    category :String,
    image: String
})

const Book= mongoose.model("Book",bookSchema);
export default Book;
// "id": 2,
// "name": "Science Book",
// "title": "A Brief History of Time",
// "price": 500,
// "category": "Science",
// "image" : "https:/