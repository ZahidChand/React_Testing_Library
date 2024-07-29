import { render, screen } from "@testing-library/react"
import BeforeExample from "../Components/BeforeExample"

//beforeAll will render Before all test cases

// beforeAll(()=>{
//     console.log(""**********Before All"**********");
// })

//beforeEach will execute before each test cases

beforeEach(()=>{
    console.log("**********Before Each**********");
})

//Duplicating because we need to understan BeforeAll and BeforeEach
test("Test Label 1",()=>{
    render(<BeforeExample/>);
    console.log("1");
    expect(screen.getByText("Hello"));
})

test("Test Label 2",()=>{
    render(<BeforeExample/>);
    console.log("2");
    expect(screen.getByText("Hello"));
})

test("Test Label 3",()=>{
    render(<BeforeExample/>);
    console.log("3");
    expect(screen.getByText("Hello"));
})

test("Test Label 4",()=>{
    render(<BeforeExample/>);
    console.log("4");
    expect(screen.getByText("Hello"));
})