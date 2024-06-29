import {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    todo: string,
    name: string,
    date: Date,
}

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const [todos, setTodos] = useState<string[]>([]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setTodos((prevTodos) => [...prevTodos, data.todo]);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter ToDo" {...register('todo', { required: true, maxLength: 5 })}/>
                    { errors.todo && <span>{errors.todo.message}</span> }
                    <button type="submit">Submit</button>
                </form>
                { todos.map((todo, index) => <div key={`${todo}-${index}`}>{todo}</div>) }
            </div>
        </>
    );
};

export default Home;