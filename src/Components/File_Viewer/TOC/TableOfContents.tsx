import * as React from 'react';
import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';



const CategoryList = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5"
]

export const TableOfContents = () => {

    const [openNested, setOpen] = React.useState(false);


    const handleCat1Click = () => {
        // determine the word we're looking for
        let keyword = CategoryList[0];
        // find the word in the textbox
        let text = document.getElementById("textbox")?.textContent;
        let pattern = RegExp(`${keyword}`, 'g');
        // replace the word with a <h2> tag and id
        let modifiedText = text!.replace(pattern, ` <mark id="category-1">${keyword}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;

        // find the <h2> we just added
        var element = document.getElementById("category-1");
        // if it exists, scroll to it
        if (element) element!.scrollIntoView();
    }


    const handleCat2Click = () => {
        let keyword = CategoryList[1];
        let text = document.getElementById("textbox")?.textContent;
        let pattern = RegExp(`${keyword}`, 'g');
        let modifiedText = text!.replace(pattern, ` <mark id="category-2">${keyword}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;

        var element = document.getElementById("category-2");
        if (element) element!.scrollIntoView();
    }

    const handleCat3Click = () => {
        let keyword = CategoryList[2];
        let text = document.getElementById("textbox")?.textContent;
        let pattern = RegExp(`${keyword}`, 'g');
        let modifiedText = text!.replace(pattern, ` <mark id="category-3">${keyword}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;

        var element = document.getElementById("category-3");
        if (element) element!.scrollIntoView();
    }

    const handleCat4Click = () => {
        let keyword = CategoryList[3];
        let text = document.getElementById("textbox")?.textContent;
        let pattern = RegExp(`${keyword}`, 'g');
        let modifiedText = text!.replace(pattern, ` <mark id="category-4">${keyword}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;

        var element = document.getElementById("category-4");
        if (element) element!.scrollIntoView();
    }

    const handleCat5Click = () => {
        let keyword = CategoryList[4];
        let text = document.getElementById("textbox")?.textContent;
        let pattern = RegExp(`${keyword}`, 'g');
        let modifiedText = text!.replace(pattern, ` <mark id="category-5">${keyword}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;

        var element = document.getElementById("category-5");
        if (element) element!.scrollIntoView();
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