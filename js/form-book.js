
    function populateFormBook(objBook){
        clearMessagesErrors();
        document.querySelector('#title').value = objBook.title;
        document.querySelector('#subject').value = objBook.subject;
        document.querySelector('#pages').value = objBook.pages;
        document.querySelector('#author').value = objBook.author;
        document.querySelector('#description').value = objBook.description;
    }