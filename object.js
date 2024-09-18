/**
 * @module toDo
 * @author Marcus Möller
 */
const toDo = {
    /**
     * Function to add event to button.
     * @param {Array} totalObjects parameter to store information in array.
     * @returns {Array} Returns the updated array.
    */
   btn (totalObjects) {

       const btn = document.querySelector('.btn')
       btn.addEventListener('click', function () {
           const input = document.getElementById('toDo').value
           // check for empty string
           if (!input) {
               alert('Du måste ange något!')
            } else {
                //create listelement and add to ul
                const li = document.createElement('li')
                li.innerHTML = input
                const ul = document.querySelector('.myList')
                ul.appendChild(li)
                totalObjects[0] = (totalObjects[0] + 1)

                //create span container for deleting of li item
                const span = document.createElement("span")
                span.className = 'close'
                const txt = document.createTextNode("\u00D7")
                span.className = "close"
                span.appendChild(txt)
                li.appendChild(span)

                span.addEventListener('click', function (event) {
                    const div = event.target.parentElement
                    div.remove()
                    totalObjects[0] = totalObjects[0] - 1
                    totalObjects[1] = totalObjects[1] - 1
                    const p1 = document.querySelector("#p1")
                    const p2 = document.querySelector("#p2")
                    p1.innerHTML = "Totala uppgifter: " + totalObjects[0]
                    p2.innerHTML = "Totala uppgifter: " + totalObjects[1]
                })
            }

            //reset text in input window
            const textInput = document.querySelector('#toDo')
            textInput.value = ''

            for (let i = 0; i < 3; i++) {
                const p = document.querySelector('p')
                if (p.id === "p1") {
                    p.innerHTML = 'Totala uppgifter: ' + totalObjects[0]
                }
            }
        })

        return totalObjects
    },
    /**
     * Function to add event to list elements.
     * @param {Array} toDoArray parameter to store information.
     * @returns {Array} returns the information about the array.
     */
    listEvent (totalObjects) {
        const list = document.querySelector('ul')
        list.addEventListener('click', function (event) {
            const p = document.querySelector('#p2')
            if (event.target.classList.contains("check")) {
                event.target.classList.remove("check")
                totalObjects[1] = totalObjects[1] - 1
                p.innerHTML = 'Slutförda uppgifter: ' + totalObjects[1]
            } else {
                event.target.classList.add("check")
                totalObjects[1] = totalObjects[1] + 1
                p.innerHTML = 'Slutförda uppgifter ' + totalObjects[1]
            }
        })
        return totalObjects
    },
    /**
     * Function to set the inital toDo text.
     */
    toDoText (totalObjects) {
        for (let i = 0; i < 3; i++) {
          const p = document.createElement('p')
          p.id = 'p' + (i + 1)

          if (p.id === 'p1') {
            p.innerHTML = 'Totala uppgifter: ' + totalObjects[0]
          } else if (p.id === 'p2') {
            p.innerHTML = 'Slutförda uppgifter: ' + totalObjects[1]
          }
          const info = document.querySelector('.info')
          info.appendChild(p)
        }
    }
}

export {toDo}
