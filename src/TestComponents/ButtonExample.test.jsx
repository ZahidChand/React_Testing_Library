import { fireEvent, render, screen } from "@testing-library/react"
import ButtonExample from "../Components/ButtonExample"

// Heading
test("Test Heading Text",()=>{
    render(<ButtonExample/>);
    const headingElement = screen.getByText("Hello Click Button Below");
    expect(headingElement).toBeInTheDocument()
})

// Button
test("Test Button Render",()=>{
    render(<ButtonExample/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})

test("Test Button Text",()=>{
    render(<ButtonExample/>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument()
})

test("Test Button Click",()=>{
    render(<ButtonExample/>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(screen.getByText("Button Clicked")).toBeInTheDocument()
})

