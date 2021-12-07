import {AppBar, Box, Toolbar, Typography} from '@mui/material/';
import Button from '@mui/material/Button';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';

export const SimpleAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton href="/" size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <HomeRoundedIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Component Archive
                    </Typography>
                    <Button href="/ReferenceGuide" color="inherit">Reference</Button>
                    <Button href="/ComponentBrowser" color="inherit">Components</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}