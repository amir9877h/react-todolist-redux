import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'
import { selectTodos } from './todosSlice'

const TodoList = () => {
    const todos = useSelector(selectTodos)

    const renderedListItems = Object.keys(todos).map((todoId) => {
        return <TodoListItem key={todoId} todo={todos[todoId]} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
