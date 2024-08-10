import { render, screen, fireEvent } from "@testing-library/react";
import TodoContainer from "./TodoContainer";

describe("todoApp tests:", () => { 
    test("When the form is submitted once with a todo item, a single <li> element with the todo text is rendered.",()=>{
        render(<TodoContainer/>)
        const input= screen.queryByPlaceholderText("write a todo")
        const submitBtn= screen.getByRole("button")

        fireEvent.change(input, {target: {value: "do your homework"}})
        fireEvent.click(submitBtn)

        const newTodo= screen.getByRole("listitem")
        expect(newTodo).toBeInTheDocument()
    })


    test("When the form is submitted multiple times with different todo items, all the todo items are rendered as <li> elements in the list.", ()=>{
        render(<TodoContainer/>)
        const input= screen.queryByPlaceholderText("write a todo")
        const submitBtn= screen.getByRole("button")

        fireEvent.change(input, {target: {value: "buy milk"}})
        fireEvent.click(submitBtn)

        fireEvent.change(input, {target: {value: "go to the gym"}})
        fireEvent.click(submitBtn)

        fireEvent.change(input, {target: {value: "cook dinner"}})
        fireEvent.click(submitBtn)

        const milk= screen.getByText("buy milk")
        const gym= screen.getByText("go to the gym")
        const dinner= screen.getByText("cook dinner")

        expect(milk).toBeInTheDocument()
        expect(gym).toBeInTheDocument()
        expect(dinner).toBeInTheDocument()
    })


 })