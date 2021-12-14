import * as React from 'react';
import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';



export const TableOfContents = () => {

    const [openNested, setOpen] = React.useState(false);


    const handleCat1Click = () => {
        var element = document.getElementById("initial-header")
        element!.scrollIntoView();
    }
    const handleCat2Click = () => {
        var element = document.getElementById("second-header")
        element!.scrollIntoView();
    }
    const handleCat3Click = () => {
        var element = document.getElementById("third-header")
        element!.scrollIntoView();
    }
    const handleCat4Click = () => {
        var element = document.getElementById("fourth-header")
        element!.scrollIntoView();
    }
    const handleCat5Click = () => {
        var element = document.getElementById("fifth-header")
        element!.scrollIntoView();
    }

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
                    <ListSubheader sx={{ bgcolor: "inherit", color: "black" }} component="div" id="nested-list-subheader">
                        Table of Contents
                    </ListSubheader>
                }>

                <ListItemButton onClick={handleCat1Click} sx={{ color: "gray" }}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 1" />
                </ListItemButton>

                <ListItemButton onClick={handleCat2Click} sx={{ color: "gray" }}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 2" />
                </ListItemButton>

                <ListItemButton onClick={handleExpansionClick} sx={{ color: "gray" }}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sub Categories" />
                    {openNested ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openNested} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleCat3Click} sx={{ pl: 4, color: "gray" }}>
                            <ListItemIcon>
                                <CircleSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Category 3" />
                        </ListItemButton>

                        <ListItemButton onClick={handleCat4Click} sx={{ pl: 4, color: "gray" }}>
                            <ListItemIcon>
                                <CircleSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Category 4" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleCat5Click} sx={{ color: "gray" }}>
                    <ListItemIcon>
                        <CircleSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category 5" />
                </ListItemButton>

            </List>
        </nav>
    );
}