"use client";

import { updateTodo } from "@/actions/action";
import { useState } from "react";

export default function EditTodoForm(
    { id, children } : { id: number, children: React.ReactNode}
) {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("id", String(id));

    await updateTodo(formData); 

    setIsEditing(!isEditing);
  };

  return (
    <>
        {!isEditing ? (
            <>
                {children}
                <button 
                    type="button"
                    className="btn btn-sm btn-outline-black mt-3 mb-3 float-end"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    Edit
                </button>
            </>
        ) :(
            <form
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="id" value={id} />
                <input
                    type="text"
                    name="title"
                    className="input input-bordered rounded-md w-full mt-0 px-3 ms-[-12px]"
                    placeholder="E.g. make salad for dinner"
                    required
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button 
                    type="submit"
                    className="btn btn-sm btn-outline-black mt-3 mb-3 float-end"
                >
                    Save
                </button>
                <button 
                    type="button"
                    className="btn btn-sm font-medium mt-3 mb-3 float-end me-3"
                    onClick={() => setIsEditing(false)}
                >
                    Discard
                </button>
            </form>
        )
        }
    </>
  )
}
