import Book from "../models/book.model.js"

const addBook = async (req,res)=>{
    const {title,author,genre,publishedYear} = req.body || {}
    
    if(!title || !author || !genre || !publishedYear)
    {
        res.status(400).json({
            message:"All field are required",
            success: false
        })
    }

    try {
        const book = await Book.create({title,author,genre,publishedYear});

        res.status(200).json({
            message:"Book add successfully",
            success:true
        })

    } catch (error) {
        res.status(400).json({
            message:"Faild to add book",
            success:false
         })
    }
  
}

const updateBook = async (req,res)=>{
    const {_id, title, author, genre, publishedYear} = req.body;
    
    if(!_id){
        res.status(400).json({
            message:"All field are required.",
            success:false
        })
    }
    
    try {
        const befourUpdate = await Book.findById(_id);
        if(!befourUpdate){
            res.status(400).json({
                message:"Book not found",
                success:false
            })
        }
   
        const updateData = {title, author, genre, publishedYear};
        const option = {"new":true};
        const udatedBook = await Book.findByIdAndUpdate(_id,updateData,option);
        if(!udatedBook){
            res.status(400).json({
                message:"Faild to update"
            })
        }
        res.status(200).json({
            message:"Updated Successfully",
            success:true
        })
    } catch (error) {
        res.status(400).json({
            message:"Faild to update",
            success:false
        })
    }
}

const getBook = async (req,res)=>{
    try {
        const book = await Book.find();
        if(!book){
            res.status(400).json({
                message:"Faild to get book",
                success:false
            })
        }
        res.send(book)  
    } catch (error) {
        res.status(400).json({
            message:"Faild to get book",
            success:false
        })
    }  
}

const deleteBook = async (req,res)=>{
    const {title} = req.body;
    
    if(!title){
        res.status(400).json({
            message:"Plz enter title to delete",
            success:false
        })
    }
    try {

        const book = await Book.deleteOne({title});

        if(book.deletedCount === 0)
        {
            res.status(400).json({
                message:"Faild to delete the book",
                success:false
            })
        }

        res.status(200).json({
            message:"Book deleted successfully",
            success:true
        })
        
    } catch (error) {
        res.status(400).json({
            message:`internal server error in delete the book: ${error}`,
            success:false
        })
    }

    
    
}

export {addBook,getBook,deleteBook,updateBook}