/**
 * Main code
 * @author Marcus Möller 
*/
import { toDo } from "./object.js"

let totalObjects = [0, 0, 0]
totalObjects = toDo.btn(totalObjects)
totalObjects = toDo.listEvent(totalObjects)
toDo.toDoText(totalObjects)
