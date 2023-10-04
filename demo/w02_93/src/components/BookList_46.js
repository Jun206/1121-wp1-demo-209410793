import { useState } from "react";
import Book_93 from "./Book_93";
import {Book_data} from "./book_data";
const BookList_93 = () => {
	// eslint-disable-next-line no-unused-vars
	const [books, setBooks] = useState(Book_data);
	return (
		books.map((book) => {
			const {id, img, title, author} = book;
			return (
				// eslint-disable-next-line react/jsx-pascal-case
				<Book_93
					key={id}
					img={img}
					title={title}
					author={author}
				/>
			)
		})
	)
}
export default BookList_93;