import { render, screen } from "@testing-library/react"
import AfterExample from "../Components/AfterExample";

//afterAll will render After all test cases

// afterAll(()=>{
//     console.log("**********After All**********");
// })

// //AfterEach will execute before each test cases
afterEach(()=>{
    console.log("**********After Each**********");
})

//Duplicating because we need to understan AfterAll and AfterEach
test("Test Label 1",()=>{
    render(<AfterExample/>);
    console.log("1");
    expect(screen.getByText("After Example"));
})

test("Test Label 2",()=>{
    render(<AfterExample/>);
    console.log("2");
    expect(screen.getByText("After Example"));
})

test("Test Label 3",()=>{
    render(<AfterExample/>);
    console.log("3");
    expect(screen.getByText("After Example"));
})

test("Test Label 4",()=>{
    render(<AfterExample/>);
    console.log("4");
    expect(screen.getByText("After Example"));
})