
    //*** Renderizando mensagens de erro
    function validationBook(objBook) {

        var errors = [];

        clearMessagesErrors();

        if(objBook.title.value.length == 0){
            errors.push('Títilo não pode ser vazio!');
            generateErrorMessage(objBook.title, 'Título não pode ser vazio!');
        }

        if(objBook.subject.value.length == 0){
            errors.push('Assunto não pode ser vazio!');
            generateErrorMessage(objBook.subject, 'Assunto não pode ser vazio!');
        }

        if(objBook.pages.value.length == 0){
            errors.push('Páginas não pode ser vazio!');
            generateErrorMessage(objBook.pages, 'Páginas não pode ser vazio!');
        }else{
            if(isNaN(objBook.pages.value)) {
                errors.push('Páginas deve ser apenas números!');
                generateErrorMessage(objBook.pages, 'Páginas deve ser apenas números!!');
            }
        }

        if(objBook.author.value.length == 0){
            errors.push('Autor não pode ser vazio!');
            generateErrorMessage(objBook.author, 'Autor não pode ser vazio!');
        }

        if(objBook.description.value.length == 0){
            errors.push('Descrição não pode ser vazio!');
            generateErrorMessage(objBook.description, 'Descrição não pode ser vazio!');
        }

        return errors;
    }

    function generateErrorMessage(element, messageError) {
        if (element != null) {
            var spanErrorMessage = element.nextElementSibling;
            spanErrorMessage.textContent = messageError;
            spanErrorMessage.style.display = "block";
            element.classList.add('fieldWithError');
        }
    }

    function showErrosMessages(errors) {

        var ulErrors = document.querySelector('#erros-messages');

        //*** Mostrar as mensagens de erros
        errors.forEach(function (error) {
            var liCurrent = document.createElement('li');
            liCurrent.textContent = error;
            ulErrors.appendChild(liCurrent);
        });

        ulErrors.style.display = "block";
    }

    //*** Limpar as mensagens de erros
    function clearMessagesErrors() {

        var ulErrors = document.querySelector("#erros-messages");
        ulErrors.innerHTML = "";
        ulErrors.style.display = "none";

        var arraySpanErros = document.querySelectorAll('.error-message-field');
        var arrayInputErros = document.querySelectorAll('.fieldWithError');

        if(arraySpanErros.length > 0){
            arraySpanErros.forEach(function (currentSpanError) {
                currentSpanError.textContent = "";
                currentSpanError.style.display = "none";
            });
        }

        if(arrayInputErros.length > 0){
            arrayInputErros.forEach(function (currentInputError) {
                currentInputError.classList.remove('fieldWithError');
            });
        }
    }

    var inputWithErrors = document.querySelector("#form-book");

    inputWithErrors.addEventListener("input", function (event) {

        if(event.target && event.target.classList.contains("fieldWithError")){
            var field = event.target;
            var spanError = field.nextElementSibling;
            field.classList.remove('fieldWithError');
            spanError.textContent = "";
            spanError.style.display = "none";
        }
    });
