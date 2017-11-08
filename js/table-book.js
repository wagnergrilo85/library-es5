
    function populateTable(objBook) {

        var mainTable = document.querySelector("#table-list-books");

        //*** Criar elementos da tabela
        var tr = document.createElement("tr");

        var tdTitle = createTd("info-title", objBook.title);
        var tdSubject = createTd("info-subject", objBook.subject);
        var tdPages = createTd("info-pages", objBook.pages);
        var tdAuthor = createTd("info-author", objBook.author);

        tr.appendChild(tdTitle);
        tr.appendChild(tdSubject);
        tr.appendChild(tdPages);
        tr.appendChild(tdAuthor);
        tr.appendChild(createTdActions());

        tr.classList.add("book")
        mainTable.appendChild(tr);
    }

    function createTd(classe, texto) {
        var newTd = document.createElement("td");
        newTd.classList.add(classe);
        newTd.textContent = texto;
        return newTd;
    }

    function createTdActions() {
        var newTd = document.createElement("td");
        var actionRemoveTd = '<div class="btn-group">' +
                '<a href = "#" class = "btn btn-xs btn-danger btnDeleteBook"> Remover </a>' +
                '<a href = "#" class = "btn btn-xs btn-info btnEditBook"> Editar </a> ' +
            '</div>';

        newTd.innerHTML = actionRemoveTd;
        return newTd;
    }

