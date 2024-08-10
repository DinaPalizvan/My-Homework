/* eslint-disable no-undef */
import { screen, render } from "@testing-library/react";
import Text from "./Text";

describe("testing text function", ()=>{
    it("should render 'welcome to APS'", () => {
        render(<Text/>);
        expect(screen.getByText("Welcome To APS")).toBeInTheDocument()
    });
    it("should have the props text", ()=>{
        const testProps= "helooooo"
        render(<Text headingText={testProps}/>)
        expect(screen.getByRole("heading")).toHaveTextContent("helooooo")
    })
})

