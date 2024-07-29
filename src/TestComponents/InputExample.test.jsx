import { fireEvent, render, screen } from "@testing-library/react"
import InputExample from "../Components/InputExample";

test("Input box test",()=>{
    render(<InputExample/>);
    const inputElement = screen.getByPlaceholderText("Enter User Name");
    expect(inputElement).toBeInTheDocument();
})

test("Test using placeholder",()=>{
    render(<InputExample/>);
    const inputElement = screen.getByPlaceholderText("Enter User Name");
    expect(inputElement).toBeInTheDocument();
})

test("Test using on change",()=>{
    render(<InputExample/>);
    const inputElement = screen.getByPlaceholderText("Enter User Name");
    fireEvent.change(inputElement,{target:{value:"zahid"}});
    expect(inputElement.value).toBe("zahid");
})
//When there is 2 input box then we should specify more clear different
//just screen.getByRole("textbox") will not work in case of more then one input box

test("Test input box whose id is t1",()=>{
    render(<InputExample/>);
    const inputElement = screen.getByPlaceholderText("Enter Hobbie");
    expect(inputElement).toHaveAttribute("id","t2");
})