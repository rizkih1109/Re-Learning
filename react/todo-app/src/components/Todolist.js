import TodoItem from "./TodoItem"

export default function TodoList({ todos = [] }) {
    const todosNode = todos.map(item => (<TodoItem todo={item} key={item.id}/>))

    return (
        <ul>
            {todosNode}
        </ul>
    )
}