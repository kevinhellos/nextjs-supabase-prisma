"use client";

import { useState } from "react";
import { addTodo } from "@/actions/action";

export default function AddTodoForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);

    await addTodo(formData); 

    setTitle("");
  };

  return (
    <form 
        onSubmit={handleSubmit}
        className="flex mb-5"
    >
        <input
            type="text"
            name="title"
            className="input input-bordered rounded-md w-full mt-5"
            placeholder="E.g. make salad for dinner"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button
            type="submit"
            className="btn btn-black ms-3 mt-5"
        >
            Add todo
        </button>
    </form>
  );
}