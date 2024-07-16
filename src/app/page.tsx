import { addTodo, deleteTodo } from "@/actions/action";
import AddTodoForm from "@/components/AddTodoForm";
import Container from "@/components/Container";
import { PrismaClient } from "@prisma/client";

export default async function Home() {

  // Init prisma
  const prisma = new PrismaClient();

  // Get all todos
  const todos = await prisma.todo.findMany();

  return (
    <Container>
      <h1 className="text-3xl font-sans">Todos</h1>

      <AddTodoForm/>

      {todos.map((todo, index) => (
        <div key={index} className="border border-gray-200 px-5 py-2 rounded-md mb-5">
          <p className="mt-3">{todo.title}</p>
          <form action={deleteTodo}>
            <input type="hidden" name="id" id={String(todo.id)} value={String(todo.id)}/>
            <button 
              type="submit"
              className="btn btn-sm btn-black mt-3 mb-3">
              Delete
            </button>
          </form>
        </div>
      ))}

      {todos.length < 1 &&
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
      }

    </Container>
  );
}
