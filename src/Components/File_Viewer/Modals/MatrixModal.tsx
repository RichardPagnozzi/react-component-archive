import { Box, Typography, Modal, Grid, Card, CardActions, CardContent, Button } from '@mui/material';
import { ModalButton1 } from './ModalButton1';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'gray',
  boxShadow: 24,
};

type ModalProps = {
  openModal: boolean
  closeFunction: () => void
}

const ButtonLabels = [
  "Button 1",
  "Button 2",
  "Button 3",
  "Button 4",
  "Button 5",
  "Button 6",
]

export const MatrixModal = (props: ModalProps) => {

  const onButton1Click = () => { }
  const onButton2Click = () => { }
  const onButton3Click = () => { }
  const onButton4Click = () => { }
  const onButton5Click = () => { }
  const onButton6Click = () => { }


  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={props.closeFunction}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Card sx={style}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Matrix Manager
            </Typography>
            <hr />
            <Grid container spacing={2} columns={12} >
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[0]} onClickFunction={onButton1Click} />
              </Grid>
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[1]} onClickFunction={onButton2Click} />
              </Grid>
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[2]} onClickFunction={onButton3Click} />
              </Grid>
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[3]} onClickFunction={onButton4Click} />
              </Grid>
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[4]} onClickFunction={onButton5Click} />
              </Grid>
              <Grid item xs={4}>
                <ModalButton1 label={ButtonLabels[5]} onClickFunction={onButton6Click} />
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </Modal>
    </div>

  );
}