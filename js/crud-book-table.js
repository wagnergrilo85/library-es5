
    var rowsTableBook = document.querySelector("#table-list-books");

    rowsTableBook.addEventListener("click", function (event) {

        if(event.target && event.target.classList.contains('btnDeleteBook')){
            var btnDeleteBook = event.target;
            var trParent = btnDeleteBook.parentNode.parentNode.parentNode;
            trParent.remove();
        }

        if(event.target && event.target.classList.contains('btnEditBook')){

            var btnEditBook = event.target;
            var trParent = btnEditBook.parentNode.parentNode.parentNode;

            var title       = trParent.querySelector('.info-title').textContent;
            var subject     = trParent.querySelector('.info-subject').textContent;
            var pages       = trParent.querySelector('.info-pages').textContent;
            var author      = trParent.querySelector('.info-author').textContent;
            var description = 'description is not saved in the table.';

            trParent.remove();

            var objBook = getObjectValueBookEdit(title, subject, pages, author, description);
            populateFormBook(objBook);
        }
    });

    function getObjectValueBookEdit(title, subject, pages, author, description) {
        return {
            title: title,
            subject: subject,
            pages: pages,
            author: author,
            description: description
        };
    }