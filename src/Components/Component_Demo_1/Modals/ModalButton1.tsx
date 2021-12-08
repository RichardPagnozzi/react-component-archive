import { Button } from '@mui/material';


type ModalButtonProp = {
    label: string,
    onClickFunction: () => void
}

const buttonStyle = {
    boxShadow: 24,
    p: 2,
    color: "white",
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
};


export const ModalButton1 = (props: ModalButtonProp) => {
    return (
        <div>
            <Button
                variant="text"
                onClick={props.onClickFunction}
                sx={buttonStyle}
            >
                {props.label}
            </Button>
        </div>
    )
}