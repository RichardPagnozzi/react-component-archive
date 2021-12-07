
type PassingProp = {
    children: React.ReactNode
}

export const PropPassing = (props: PassingProp) => {
    return (
       
       <div>
            {props.children}

        </div>
    )
}
