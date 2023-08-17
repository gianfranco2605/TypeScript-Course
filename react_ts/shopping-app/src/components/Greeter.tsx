
interface GreeterProps {
    person: string
}

function Greeter({person}: GreeterProps): JSX.Element {
    return <h1>Hello {person}</h1>
}

// alternative sintax tsx function REACT:FC(functional components)
// const Greeter: React.FC = () => {
//     return <h1>Hello!</h1>
// }

export default Greeter