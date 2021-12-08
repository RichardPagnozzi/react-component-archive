import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'File Viewer',
  'Sync Matrix',
  'Mission Analysis',
  'Timeline',
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '50%'}}>
      <Stepper activeStep={0} >
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

