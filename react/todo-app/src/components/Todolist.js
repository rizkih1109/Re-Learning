import TodoItem from "./TodoItem"

export default function TodoList({ todos = [] }) {
    const todosNode = todos.map((item, index) => (<TodoItem todo={item} />))

    return (
        <ul>
            {todosNode}
        </ul>
    )
}