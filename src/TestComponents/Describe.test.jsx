import { render, screen } from "@testing-library/react"
import DescribeExample from "../Components/DescribeExample"
// Describe is used to arrange all the component, business logic, functions,
// api calls in one organised format like in this example all tags are on one describe and buttons in another
describe("All heading tags",()=>{
    test("h1 tag render",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Hello this is h1")).toBeInTheDocument();
    })
    
    test("h2 tag render",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Hello this is h2")).toBeInTheDocument();
    })
    
    test("h3 tag render",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Hello this is h3")).toBeInTheDocument();
    })
})
describe("All buttons",()=>{
    test("Button B1",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Button One")).toBeInTheDocument();
    })

    test("Button B2",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Button Two")).toBeInTheDocument();
    })

    test("Button B3",()=>{
        render(<DescribeExample/>);
        expect(screen.getByText("Button Three")).toBeInTheDocument();
    })
})