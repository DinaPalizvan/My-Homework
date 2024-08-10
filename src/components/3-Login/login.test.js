import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

describe("login tests:", ()=>{
    test("there should be a login button in the document", ()=>{
        render(<Login/>)
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
    test("the button should display login as initial text", ()=>{
        render(<Login/>)
        expect(screen.getByRole("button")).toHaveTextContent("login")
    })
    test("it should change to logout when clicked", ()=>{
        render(<Login/>)
        const loginBtn= screen.getByRole("button")
        
        fireEvent.click(loginBtn)
        expect(loginBtn).toHaveTextContent("logout")
    })
})