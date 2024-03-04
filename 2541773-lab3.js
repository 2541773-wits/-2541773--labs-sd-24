external function getBookTitlesByYear(books){
    const obj = {};
        for (let k=0; k<books.length;k++){
            let book = books[k];
            if (book.year in obj){
                obj[book.year].push(book.title);
            }
            else{
            obj[book.year] = [book.title];
            }
        }
        return obj;
}