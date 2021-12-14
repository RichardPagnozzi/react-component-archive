// ****************** Imports ********************
import { useState, useEffect } from 'react';
// MUI
import { Container, Button, Stack, ButtonGroup, Typography, MenuItem, Box, IconButton, AppBar, Menu, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIconSharp from '@mui/icons-material/CloudUpload';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { TextareaAutosize } from '@mui/base';
// Dependencies
import { Categories } from './Categories';
import { MatrixModal } from '../Modals/MatrixModal';
import { AnalysisModal } from '../Modals/AnalysisModal';
import { FormatModal } from '../Modals/FormatModal';




export const TextFileViewer = () => {

    // ****************** State/Variables ********************

    const [fileData, setFileData] = useState<any>(null);
    const [inputValue, setInputValue] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; } | null>(null);
    const [isModalOpen, setModal] = useState('')

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
    
    const handleOpenContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 } : null);
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    const openModal = (event: any) => {
        event.preventDefault()
        setModal(event.target.innerText.toString())
        handleCloseContextMenu();
    }

    const closeModal = () => {
        setModal('')
    }
    // ******************      HTML      ******************

    const CategoriesList = Categories.map((category) => <MenuItem value={`${category}`}>{category}</MenuItem>);

    const Input = styled('input')({
        display: 'none',
    });

    let TextBox, NavBar;


    // What is rendered while NO Text File is Selected
    if (fileData == "" || fileData == null) {
        NavBar = <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle2" sx={{ color: "lightgray" }}> FILE VIEWER </Typography>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {inputValue}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

        TextBox =
            <Box component="div" sx={{ border: "dashed 2px gray", display: "flex", height: 250, backgroundColor: 'DarkGrey', alignItems: "center", justifyContent: "center" }} >
                <Stack direction="column" justifyContent="center" alignItems="center">
                    <label htmlFor="icon-button-file">
                        <Input accept="text/*" type="file" id="icon-button-file" onChange={handleOnFileChange} />
                        <IconButton component="span" sx={{ color: "White" }}>
                            <CloudUploadIconSharp />
                        </IconButton>
                    </label>
                    <Typography variant="subtitle2" sx={{ color: "white" }}> Upload File  </Typography>
                </Stack>
            </Box>
    }
    // What is rendered while Text File is Selected
    else {
        NavBar = <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup >
                        <IconButton sx={{ color: "white" }} >  <ZoomInIcon /> </IconButton>
                        <IconButton sx={{ color: "white" }} >  <ZoomOutIcon /> </IconButton>
                        <IconButton sx={{ color: "white" }} >  <SaveIcon /> </IconButton>
                    </ButtonGroup>

                    <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "lightgray" }}>
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
            <div onContextMenu={handleOpenContextMenu} style={{ cursor: 'context-menu' }}>
                <Box component="div" sx={{ border: "dashed 2px gray", height: 250, backgroundColor: 'DarkGrey', overflowY: "auto" }} >
                    <pre id="textbox">
                        {fileData}
                    </pre>
                </Box>
                <Menu
                    open={contextMenu !== null}
                    onClose={handleCloseContextMenu}
                    anchorReference="anchorPosition"
                    anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
                >
                    <MenuItem onClick={openModal}> Matrix Manager </MenuItem>
                    <MenuItem onClick={openModal}> Mission Analysis Tool</MenuItem>
                    <MenuItem onClick={handleCloseContextMenu}> Format Tool </MenuItem>
                </Menu>
            </div>
    }

    return (
        <div>
            <Container maxWidth="xl">

                {NavBar}
                {TextBox}

                <MatrixModal closeFunction={closeModal} openModal={isModalOpen === 'Matrix Manager'} />
                <FormatModal />
                <AnalysisModal closeFunction={closeModal} openModal={isModalOpen === 'Mission Analysis Tool'} />

            </Container>
        </div>
    )
}




