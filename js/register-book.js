
    var btnSaveBook = document.querySelector("#btnSaveBook");
    var formBook = document.querySelector("#form-book");

    btnSaveBook.addEventListener("click", function (event) {

        event.preventDefault();

        //*** pegar dados do forlumario
        var book = getObjectValueBook(formBook);

        //*** Validar dados
        var erros = validationBook(getObjectBook(formBook));
        if(erros.length > 0){
            //*** mostrar mensagens de erro
            showErrosMessages(erros);
            return;
        }

        //*** Inserir dados na tabela
        populateTable(book);

        //*** Limpar formulario
        formBook.reset();

        //*** Setando o focus no campo 'title'
        document.querySelector('#title').focus();
    });

    function getObjectBook(form) {

        return {
            title: form.title,
            subject: form.subject,
            pages: form.pages,
            author: form.author,
            description: form.description
        };
    }

    function getObjectValueBook(form) {

        return {
            title: form.title.value,
            subject: form.subject.value,
            pages: form.pages.value,
            author: form.author.value,
            description: form.description.value
        };
    }