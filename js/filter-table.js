
    var inputFilterBook = document.querySelector("#input-filter-book");

    inputFilterBook.addEventListener("input", function (event) {

        var books = document.querySelectorAll('.book');

        if(books.length > 0){

            for(var i = 0; i < books.length; i++){

                var rowBook = books[i];
                var title = rowBook.querySelector('.info-title').textContent;
                var exp_title = new RegExp(this.value, 'i');

                if(!exp_title.test(title)){
                    rowBook.classList.add('invisible');
                }else{
                    rowBook.classList.remove('invisible');
                }
            }

        }else{
            for(var i = 0; i < books.length; i++) {
                var rowBook = books[i];
                rowBook.classList.remove('invisible');
            }
        }

    });