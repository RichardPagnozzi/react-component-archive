import * as React from 'react';
import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';



export const TableOfContents = () => {

    const [openNested, setOpen] = React.useState(false);
    const handleExpansionClick = () => {
        setOpen(!openNested);
    };


    return (
        <nav style={{ position: "sticky", top: "24px" }}>
            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader sx={{bgcolor:"inherit", color:"black"}}component="div" id="nested-list-subheader">
                        Table of Contents
                    </ListSubheader>
                }>

                <ListItemButton sx={{color:"gray"}}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 1" />
                </ListItemButton>

                <ListItemButton sx={{color:"gray"}}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 2" />
                </ListItemButton>

                <ListItemButton onClick={handleExpansionClick} sx={{color:"gray"}}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 3" />
                    {openNested ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openNested} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color:"gray"}}>
                            <ListItemIcon>
                                <CircleSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sub-Category 1" />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>
        </nav>
    );
}