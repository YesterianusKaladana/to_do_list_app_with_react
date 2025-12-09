# My To-Do List App

A simple **React** to-do list application that allows users to manage tasks interactively.

## Features

- **Add Tasks:** Enter a new task and click the "Add Task" button to add it to the list.
- **Delete Tasks:** Remove a task by clicking the ❌ button next to it.
- **Reorder Tasks:** 
  - Move a task up using the ⬆️ button.
  - Move a task down using the ⬇️ button.
- **Dynamic UI:** Tasks are displayed in an ordered list (`<ol>`), and the UI updates immediately when tasks are added, deleted, or moved.

## How It Works

- The app uses **React functional components** and the `useState` hook for managing state:
  - `tasks` stores the list of tasks.
  - `newTask` stores the current input value.
- Event handlers:
  - `handleInputChange` updates the input value.
  - `handleAddTask` adds a new task if the input is not empty.
  - `handleDeleteTask` removes a task at a specific index.
  - `handleMoveTaskUp` swaps a task with the one above it.
  - `handleMoveTaskDown` swaps a task with the one below it.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <https://github.com/YesterianusKaladana/to_do_list_app_with_react.git>
