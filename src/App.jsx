import { useContext, useState } from "react";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import CheckIcon from "./assets/icon-check.svg";
import { DarkModeContext } from "./provider";

function App() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [todos, setTodos] = useState([
    { id: 1, todo: "Complete online JavaScript course", isCompleted: false },
    { id: 2, todo: "Jog around the park 3x", isCompleted: false },
    { id: 3, todo: "10 minutes meditation", isCompleted: true },
    { id: 4, todo: "Read for 1 hour", isCompleted: false },
    { id: 5, todo: "Pick up groceries", isCompleted: false },
    { id: 6, todo: "Complete Todo App on Frontend Mentor", isCompleted: false },
  ]);
  console.log(darkMode);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);

  const handleClick = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      const newTodos = {
        id: todos.length + 1,
        todo: e.target.value,
        isCompleted: false,
      };
      setTodos((prev) => [...prev, newTodos]);
      setFilteredTodos((prev) => [...prev, newTodos]);
      e.target.value = "";
    }
  };

  return (
    <div
      className={`h-dvh ${
        darkMode
          ? "bg-hero-pattern-dark bg-very-dark-blue"
          : "bg-hero-pattern-light bg-very-light-gray"
      }  bg-auto bg-repeat-x  flex justify-center text-lg`}
    >
      <div className="w-2/5 mt-20 flex flex-col space-y-10">
        <div className="flex items-center justify-between">
          <span className="text-very-light-gray font-semibold text-5xl tracking-widest">
            TODO
          </span>
          <img
            onClick={() => setDarkMode(!darkMode)}
            src={darkMode ? SunIcon : MoonIcon}
            alt="moon icon"
          />
        </div>
        <div
          className={`p-4 flex items-center space-x-5  rounded-md font-semibold  ${
            darkMode
              ? "bg-very-dark-desaturated-blue text-white"
              : "bg-white text-dark-grayish-blue"
          } w-full`}
        >
          <div className="border rounded-full w-5 h-5 "></div>
          <input
            type="text"
            className={`w-full p-2 ${
              darkMode
                ? "bg-very-dark-desaturated-blue text-white"
                : "bg-white text-dark-grayish-blue"
            }`}
            placeholder="Create a new todo..."
            onKeyDown={handleAdd}
          />
        </div>
        <div
          className={`w-full flex flex-col   rounded-md ${
            darkMode
              ? "bg-very-dark-desaturated-blue text-white"
              : "bg-white text-dark-grayish-blue"
          } shadow-lg`}
        >
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`p-4 flex items-center space-x-5 ${
                !darkMode
                  ? "border-t"
                  : "border-t border-very-dark-grayish-blue"
              }`}
              onClick={() => handleClick(todo.id)}
            >
              <div
                className={`flex items-center justify-center rounded-full w-6 h-6 ${
                  todo.isCompleted
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    : "border"
                }`}
              >
                {todo.isCompleted && (
                  <img src={CheckIcon} alt="check icon" className="h-3 w-3" />
                )}
              </div>
              <span
                className={`text-dark-grayish-blue ${
                  todo.isCompleted && "line-through"
                }`}
              >
                {todo.todo}
              </span>
            </div>
          ))}
          <div
            className={`flex justify-between px-5 py-3  ${
              !darkMode ? "border-t" : "border-t border-very-dark-grayish-blue"
            } text-base`}
          >
            <span className="text-dark-grayish-blue">
              {todos.filter((todo) => !todo.isCompleted).length} items left
            </span>
            <div className="flex space-x-3 font-semibold">
              <span
                className="cursor-pointer"
                onClick={() => setFilteredTodos([...todos])}
              >
                All
              </span>
              <span
                onClick={() =>
                  setFilteredTodos([
                    ...todos.filter((todo) => !todo.isCompleted),
                  ])
                }
                className="cursor-pointer"
              >
                Active
              </span>
              <span
                onClick={() =>
                  setFilteredTodos([
                    ...todos.filter((todo) => todo.isCompleted),
                  ])
                }
                className="cursor-pointer"
              >
                Completed
              </span>
            </div>
            <span
              onClick={() => {
                setTodos((prev) => [
                  ...prev.filter((todo) => !todo.isCompleted),
                ]);
                setFilteredTodos((prev) => [
                  ...prev.filter((todo) => !todo.isCompleted),
                ]);
              }}
              className="text-dark-grayish-blue cursor-pointer"
            >
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
