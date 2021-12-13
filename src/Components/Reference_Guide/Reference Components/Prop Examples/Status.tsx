
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {

    // Message Variable
    let message

    if (props.status === 'loading') {
        message = 'Loading...'
    }
    else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    }
    else if (props.status === 'error') {
        message = 'Error fetching data.'
    }



    // Return HTML
    return (
        <div>
            <div> Example of conditional Props </div>
            <div> Status: {message} </div>
        </div>
    )
}