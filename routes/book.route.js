import express from "express"
import { addBook, deleteBook, getBook, updateBook} from "../controller/book.controller.js";

const router = express.Router();

router.post("/addBook",addBook);
router.get("/getBook",getBook);
router.delete("/deleteBook",deleteBook);
router.put("/updateBook",updateBook)

export default router;