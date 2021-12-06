// ****************** Imports ********************
import { useState, useEffect } from 'react';
// MUI
import { Container, Button, Stack, ButtonGroup, Typography, MenuItem, Box, IconButton, AppBar, Grid, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIconSharp from '@mui/icons-material/CloudUpload';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloseIcon from '@mui/icons-material/Close';
import { TextareaAutosize } from '@mui/base';
// Dependencies
import { Categories } from './Categories';
import { UploadFileOutlined } from '@mui/icons-material';





export const TextFileViewer = () => {

    // ****************** State/Variables ********************

    const [fileData, setFileData] = useState<any>(null);
    const [inputValue, setInputValue] = useState('');
    const [categoryName, setCategoryName] = useState('');
    useEffect(() => { console.log(fileData) }, [fileData]);

    // ******************      Methods      ******************

    const handleOnFileChange = (e: any) => {
        setInputValue(e.target.value);
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            let data = e.target!.result;
            setFileData(data!.toString());
        }
        reader.readAsText(file);
    }

    const handleOnClearTextClick = () => {
        setFileData(null);
        setInputValue('');
        setCategoryName('')
    }

    const handleSelect = (e: any) => {
        setCategoryName(e.target.value);
    }

    const handleFindClick = () => {
        let keyWord = categoryName;
        let text = document.getElementById("textbox")?.textContent;

        let pattern = RegExp(`${keyWord}`, 'g');
        let modifiedText = text!.replace(pattern, `<mark>${keyWord}</mark>`)!;
        document.getElementById("textbox")!.innerHTML = modifiedText!;
        console.log('Inner Html:' + document.getElementById("textbox")!.innerHTML);
    }
    // ******************      HTML      ******************

    const CategoriesList = Categories.map((category) => <MenuItem value={`${category}`}>{category}</MenuItem>);
    const Input = styled('input')({
        display: 'none',
    });

    let ButtonShelf, TextBox, NavBar;



    if (fileData == "" || fileData == null) {
        ButtonShelf = <div />
        NavBar = <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="subtitle2" sx={{color:"lightgray"}}> FILE VIEWER </Typography>   
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {inputValue}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>


        TextBox =
            <Box component="div" sx={{border:"dashed 2px gray", display: "flex", height: 150, backgroundColor: 'DarkGrey', alignItems: "center", justifyContent: "center" }} >
               <Stack direction="column" justifyContent="center" alignItems="center">
                <label htmlFor="icon-button-file">
                    <Input accept="text/*" type="file" id="icon-button-file" onChange={handleOnFileChange}/>
                    <IconButton component="span" sx={{color:"White"}}>
                        <UploadFileOutlined />
                    </IconButton>
                </label>
                <Typography variant="subtitle2" sx={{color:"white"}}> Upload File  </Typography>
                </Stack>
            </Box>
    }

    else {
        NavBar = <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <ButtonGroup >
                    <IconButton sx={{ color: "white" }} >  <ZoomInIcon /> </IconButton>
                    <IconButton sx={{ color: "white" }} >  <ZoomOutIcon /> </IconButton>
                    <IconButton sx={{ color: "white" }} >  <DownloadForOfflineIcon /> </IconButton>
                </ButtonGroup>

                <Typography variant="subtitle2" sx={{ flexGrow: 1, color:"lightgray" }}>
                    {inputValue}
                </Typography>

                <Button
                    component="label"
                    variant="outlined"
                    sx={{ color: "white" }}
                    onClick={handleOnClearTextClick}
                    endIcon={<CloseIcon />}>
                    Close File
                </Button>

            </Toolbar>
        </AppBar>
    </Box> 

        TextBox =
            <TextareaAutosize
                maxRows={100}
                defaultValue={fileData}
                id="textbox"
                style={{ width: '100%', backgroundColor: 'DarkGrey', overflowY: "auto" }} />
    }

    return (
        <div>
            <Container maxWidth="xl">
                {NavBar}
                {TextBox}
            </Container>
        </div>
    )
}




