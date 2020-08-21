/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/drag_drop */ "./src/scripts/drag_drop.js");
/* harmony import */ var _scripts_drag_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_drag_drop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_new_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/new_task */ "./src/scripts/new_task.js");
/* harmony import */ var _scripts_new_task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_new_task__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/scripts/drag_drop.js":
/*!**********************************!*\
  !*** ./src/scripts/drag_drop.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function allowDrop(e) {
//     e.preventDefault();
// }
// function dragStart(e) {
//     e.dataTransfer.setData("text", e.target.id)
// }
// function dropHere(e) {
//     e.preventDefault();
//     let data = e.dataTransfer.getData("text") // "data" type of "text"
//     e.target.appendChild(document.getElementById(data));
// }
var cards = document.querySelectorAll('.card');
var boards = document.querySelectorAll('.boards');
var draggedCard = null;

var _loop = function _loop(i) {
  var card = cards[i];
  card.addEventListener('dragstart', function (e) {
    draggedCard = card; // setTimeout(function() {
    //     card.style.display = 'none';
    // }, 0)
  }, 0);
  card.addEventListener('dragend', function () {
    setTimeout(function () {
      draggedCard.style.display = 'block';
      draggedCard = null;
    }, 0);
  });

  for (var j = 0; j < boards.length; j++) {
    var board = boards[j];
    board.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, 0);
    board.addEventListener('dragenter', function (e) {
      e.preventDefault();
    }, 0);
    board.addEventListener('drop', function (e) {
      e.preventDefault();
      this.append(draggedCard);
    }, 0);
  }
};

for (var i = 0; i < cards.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/scripts/new_task.js":
/*!*********************************!*\
  !*** ./src/scripts/new_task.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var taskInput = document.querySelector('.task-input');
var taskBtn = document.querySelector('.task-btn');
var taskList = document.querySelector('.task-list');
taskBtn.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  console.log("hello");
  var taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  var newTask = document.createElement("li");
  newTask.innerText = 'newnewnew';
  newTask.classList.add('card');
  taskDiv.appendChild(newTask);
  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'x';
  deleteBtn.classList.add("delete-btn");
  taskDiv.appendChild(deleteBtn);
  taskList.appendChild(taskDiv);
} // const taskForm = document.querySelector(".task-form");
// const taskInput = document.querySelector(".task-input");
// const taskButton = document.querySelector(".task-btn");
// const taskList = document.querySelector(".task-list");
// const TASKS_LS = "tasks"
// function paintToDo(text) {
//     // debugger
//     const li = document.createElement("li");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.value = "X"
//     const div = document.createElement("div")
//     div.innerText = text
//     li.appendChild(div);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
// }
// function handleSubmit(e) {
//     e.preventDefault();
//     const currentInput = taskInput.value;
//     paintToDo(currentInput);
//     taskInput.value = ""
// }
// function loadTasks() {
//     const tasks = localStorage.getItem(TASKS_LS);
//     if (tasks !== null) {
//         const parsedTasks = JSON.parse(tasks);
//         parsedTasks.forEach(function(task) {
//             paintToDo(task.text)
//         })
//     }
// }
// function init() {
//     // loadTasks();
//     // taskForm.addEventListener("submit", () => {handleSubmit})
//     taskButton.addEventListener("click", () => {handleSubmit});
// }
// init();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYWdfZHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9uZXdfdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2FyZHMiLCJkcmFnZ2VkQ2FyZCIsImkiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaiIsImxlbmd0aCIsImJvYXJkIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmQiLCJ0YXNrSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidGFza0J0biIsInRhc2tMaXN0IiwiYWRkVGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5ld1Rhc2siLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUJ0biIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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QUczQixRQUFRLENBQUN3QixhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0FHLFNBQU8sQ0FBQ0MsU0FBUixHQUFvQixXQUFwQjtBQUNBRCxTQUFPLENBQUNGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBQ0FILFNBQU8sQ0FBQ00sV0FBUixDQUFvQkYsT0FBcEI7QUFFQSxNQUFNRyxTQUFTLEdBQUc5QixRQUFRLENBQUN3QixhQUFULENBQXVCLFFBQXZCLENBQWxCO0FBQ0FNLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQixHQUF0QjtBQUNBRCxXQUFTLENBQUNMLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0FILFNBQU8sQ0FBQ00sV0FBUixDQUFvQkMsU0FBcEI7QUFFQVgsVUFBUSxDQUFDVSxXQUFULENBQXFCTixPQUFyQjtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxVOzs7Ozs7Ozs7OztBQ3BFQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgJy4vc2NyaXB0cy9kcmFnX2Ryb3AnO1xuaW1wb3J0ICcuL3NjcmlwdHMvbmV3X3Rhc2snO1xuXG4iLCIvLyBmdW5jdGlvbiBhbGxvd0Ryb3AoZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbi8vICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBlLnRhcmdldC5pZClcbi8vIH1cblxuLy8gZnVuY3Rpb24gZHJvcEhlcmUoZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGxldCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikgLy8gXCJkYXRhXCIgdHlwZSBvZiBcInRleHRcIlxuLy8gICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbi8vIH1cblxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkcycpO1xuXG5sZXQgZHJhZ2dlZENhcmQgPSBudWxsO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGRyYWdnZWRDYXJkID0gY2FyZDtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gfSwgMClcbiAgICB9LCAwKVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmFnZ2VkQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRyYWdnZWRDYXJkID0gbnVsbDtcbiAgICAgICAgfSwgMClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBib2FyZHNbal07XG5cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgfSwgMClcblxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIDApXG5cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKGRyYWdnZWRDYXJkKTtcblxuICAgICAgICB9LCAwKVxuICAgIH1cbn0iLCJjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpXG5jb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJyk7XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxuXG50YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcblxuZnVuY3Rpb24gYWRkVGFzayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5ld1Rhc2suaW5uZXJUZXh0ID0gJ25ld25ld25ldyc7XG4gICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAneCc7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTsgXG5cbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuLy8gY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbi8vIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbnB1dFwiKTtcbi8vIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYnRuXCIpO1xuLy8gY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuLy8gY29uc3QgVEFTS1NfTFMgPSBcInRhc2tzXCJcblxuLy8gZnVuY3Rpb24gcGFpbnRUb0RvKHRleHQpIHtcbi8vICAgICAvLyBkZWJ1Z2dlclxuLy8gICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuLy8gICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgZGVsZXRlQnRuLnZhbHVlID0gXCJYXCJcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4vLyAgICAgZGl2LmlubmVyVGV4dCA9IHRleHRcbi8vICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4vLyAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjdXJyZW50SW5wdXQgPSB0YXNrSW5wdXQudmFsdWU7XG4vLyAgICAgcGFpbnRUb0RvKGN1cnJlbnRJbnB1dCk7XG4vLyAgICAgdGFza0lucHV0LnZhbHVlID0gXCJcIlxuLy8gfVxuXG4vLyBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4vLyAgICAgY29uc3QgdGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUQVNLU19MUyk7XG4vLyAgICAgaWYgKHRhc2tzICE9PSBudWxsKSB7XG4vLyAgICAgICAgIGNvbnN0IHBhcnNlZFRhc2tzID0gSlNPTi5wYXJzZSh0YXNrcyk7XG4vLyAgICAgICAgIHBhcnNlZFRhc2tzLmZvckVhY2goZnVuY3Rpb24odGFzaykge1xuLy8gICAgICAgICAgICAgcGFpbnRUb0RvKHRhc2sudGV4dClcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgLy8gbG9hZFRhc2tzKCk7XG4vLyAgICAgLy8gdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7aGFuZGxlU3VibWl0fSlcbi8vICAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7aGFuZGxlU3VibWl0fSk7XG4vLyB9XG5cbi8vIGluaXQoKTtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=