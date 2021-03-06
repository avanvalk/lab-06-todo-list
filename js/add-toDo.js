
const addToDo = {
    // "init" method for initializing the component
    // 1. passed data or callback functions
    // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

        // below is different way to write this
        // form.onsubmit = function() {};

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', function(event) {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            const toDo = {
                name: elements.taskInput.value,
                date: elements.dueDate.value,
                status: false
            };

            onAdd(toDo);

            form.reset();
        });

    }
};

export default addToDo;