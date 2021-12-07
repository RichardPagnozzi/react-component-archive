
type GreetProps = {

    name: string
    age: number
    isLoggedIn?: boolean
    // adding a '?' makes the property optional, and doesn't need to be passed 
}

const PropGreeting = (props: GreetProps) => {
    
    // Since isLoggedIn is optional, this is how we assign it a default value if nohting else was passed in
    //   - this is also optional and doesn't need to be done
    const { isLoggedIn = true } = props

    if(props.isLoggedIn)
    {
        return (
            <div> Hello {props.name}. You are turning {props.age + 1} on your next birthday! </div>
        )
    }
    else
    {
        return(
            <div >Hello Guest. </div>
        )
    }
}



export const Test = () => {
    return(
        <div>Hello Test</div>
    )
}

export default PropGreeting;