import { deleteTodo } from "@/actions/action";
import AddTodoForm from "@/components/AddTodoForm";
import Container from "@/components/Container";
import EditTodoForm from "@/components/EditTodoForm";
import NoTodos from "@/components/NoTodos";
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
        <div key={index} className="border border-gray-200 px-5 py-2 rounded-md mb-5 overflow-auto">
        
          <EditTodoForm
            id={todo.id}
          >
            <p className="mt-3">{todo.title}</p>
          </EditTodoForm>
          
          <form action={deleteTodo} className="float-end">
            <input type="hidden" name="id" value={String(todo.id)}/>
            <button 
              type="submit"
              className="btn btn-sm btn-black mt-3 mb-3 me-3">
              Delete
            </button>
          </form>

        </div>
      ))}

      {todos.length < 1 && <NoTodos/>}

    </Container>
  );
}
