/**
 * @module toDo
 * @author Marcus Möller
 */
const toDo = {
    toDos: [],
    totalTasks: 0,
    /**
     * Function to add warning message when empty input.
     */
    emptyInputWarning () {
        const info = document.querySelector(".info");
        const emptyTxt = document.createElement("p");
        const lastElement = info.lastElementChild;
        if (lastElement.innerHTML !== "Du måste ange någon text!") {
            emptyTxt.innerHTML = "Du måste ange någon text!";
            emptyTxt.style.color = "red";
            emptyTxt.style.backgroundColor = "yellow";
            info.appendChild(emptyTxt);

            setTimeout(() => {
                emptyTxt.remove();
            }, "5000");
        }
    },
    /**
     * Function to add tasks to list.
     */
    addTasksToList (input) {
        if (!input) {
            this.emptyInputWarning();
        } else {
            console.log(input);
            // add task to list
            const li = document.createElement("li");
            li.innerHTML = input;
            const ul = document.querySelector('.myList');
            ul.appendChild(li);
            toDo.spanHandler(li, this.toDos);
            this.toDos.push(input);
            const p1 = document.querySelector("#p1");
            p1.innerHTML = `Totala uppgifter: ${toDo.toDos.length}`;
        }
    },
    /**
     * Function to add info to browser window by button.
     */
    btnClick () {
        const input = document.getElementById('toDo').value;
        toDo.addTasksToList(input);

        //reset text in input window
        const textInput = document.querySelector('#toDo');
        textInput.value = '';
    },
    /**
     * Function to add initial text from input.
     */
    infoBox () {
        const info = document.querySelector(".info");
        for (let i = 0; i < 3; i++) {
            const p = document.createElement('p');
            p.id = 'p' + (i + 1);

            if (p.id === 'p1') {
                p.innerHTML = 'Totala uppgifter: 0';
            } else if (p.id === 'p2') {
                p.innerHTML = 'Slutförda uppgifter: 0';
            }
            info.appendChild(p);
        }
    },
    /**
     * Function to make event to the list elements.
     */
    listEvent () {
        const list = document.querySelector('ul');

        list.addEventListener('click', function (event) {
            if (event.target.classList.contains("check")) {
                event.target.classList.remove("check");
                // remove finsihed tasks count
                toDo.totalTasks -= 1;
                const p2 = document.querySelector("#p2");
                p2.innerHTML = `Slutförda uppgifter: ${toDo.totalTasks}`;

            } else {
                event.target.classList.add("check");
                //finished tasks
                toDo.totalTasks += 1;
                const p2 = document.querySelector("#p2");
                p2.innerHTML = `Slutförda uppgifter: ${toDo.totalTasks}`;

            }
            console.log(toDo.toDos);
        });
    },
    /**
     * Function to handle span div.
     */
    spanHandler (li, toDos) {
        const span = document.createElement("span");
        span.className = 'close';
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.addEventListener("click", function (event) {
            const div = event.target.parentElement;
            //remove element from array
            const input = div.childNodes[0].nodeValue.trim();
            const index = toDos.indexOf(input);
            toDos.splice(index, 1);

            //write out total tasks
            const p1 = document.querySelector("#p1");
            p1.innerHTML = `Totala uppgifter: ${toDo.toDos.length}`;

            div.remove();
            event.stopPropagation();
        });
    }
};

export { toDo };
