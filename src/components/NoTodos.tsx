export default function NoTodos() {
  return (
    <div className="mt-16 text-center">
        <h1 className="text-lg lg:text-2xl text-gray-700">You currently have no todos {"🎉"}</h1>
        <p className="text-sm mt-3 text-gray-500">Start adding todos to see them here</p>
        <img
        src="/no-todo.png"
        width={300}
        className="mx-auto"
        alt="No todos"
        />
    </div>
  )
}
