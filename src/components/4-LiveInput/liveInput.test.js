import { fireEvent, render, screen } from "@testing-library/react"
import LiveInput from "./LiveInput"


describe("liveInput tests:", ()=>{
    test("The component renders an input element with the placeholder 'Enter a text' ", ()=>{
        render(<LiveInput/>)
        const input= screen.queryByPlaceholderText("Enter a text")
        expect(input).toBeInTheDocument()
    })
    test("there should be an h2 element", ()=>{
        render(<LiveInput/>)
        expect(screen.getByRole("heading")).toBeInTheDocument()
    })
    test("When a user types into the input element, the h2 element displays the entered text.", ()=>{
        render(<LiveInput/>)
        const input= screen.queryByPlaceholderText("Enter a text")
        const h2= screen.getByRole("heading")
        fireEvent.change(input, {target: { value: "Dina"}})
        expect(h2.textContent).toBe("Dina")
    })
})