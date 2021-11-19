import { useState, useEffect } from 'react';
import { Container, Button, ButtonGroup, InputLabel, Select, MenuItem, FormControl, Box } from '@mui/material';
import { Categories } from './Categories';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FindInPageIcon from '@mui/icons-material/FindInPage';

export const TextFileViewer = () => {

    // ****************** State/Variables ********************

    const [fileData, setFileData] = useState('');
    const [inputValue, setInputValue] = useState('');
    useEffect(() => { console.log(fileData) }, [fileData]);

    const [categoryName, setCategoryName] = useState('');

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
        setFileData('');
        setInputValue('');
        setCategoryName('')
    }

    const handleSelect = (e: any) => {
        setCategoryName(e.target.value);
    }

    const handleFindClick = () => {
        let keyWord = categoryName;
        let text = document.getElementById("searchable-textbox")?.textContent;

        let pattern = RegExp(`${keyWord}`, 'g');
        let modifiedText = text!.replace(pattern, `<mark>${keyWord}</mark>`)!;
        document.getElementById("searchable-textbox")!.innerHTML = modifiedText!;
        console.log('Inner Html:' + document.getElementById("searchable-textbox")!.innerHTML);
    }
    // ******************      HTML      ******************

    const CategoriesList = Categories.map((category) => <MenuItem value={`${category}`}>{category}</MenuItem>);

    let ButtonShelf;
    let TextBox;
    let SearchBox;

    if (fileData == "" || fileData == null) {
        ButtonShelf =
            <ButtonGroup >
                <Button variant="text" component="label" startIcon={<UploadFileIcon />}> Upload File
                    <input type="file" accept="text/*" value={inputValue} onChange={handleOnFileChange} hidden />
                </Button>
            </ButtonGroup>

        TextBox = <Box sx={{ height: 150, overflowY: "auto", backgroundColor: 'DarkGrey' }} />
    }

    else {
        ButtonShelf =
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ButtonGroup sx={{ display: "flex-start", justifyContent: "space-around" }}>
                    <Button component="label" variant="text" onClick={handleFindClick} startIcon={<FindInPageIcon />}> Find Keyword </Button>
                    <Button component="label" variant="text" color="warning" onClick={handleOnClearTextClick} startIcon={<FormatClearIcon />}> Clear</Button>
                </ButtonGroup>

                <FormControl variant="standard" >
                    <InputLabel id="demo-simple-select-label"> Keyword </InputLabel>
                    <Select variant="standard" labelId="demo-simple-select-label" id="keyword" value={categoryName} label="Order Category" onChange={handleSelect}>
                        {CategoriesList}
                    </Select>
                </FormControl>
            </div>


        TextBox =
            <Box sx={{ height: 150, overflowY: "auto", backgroundColor: 'DarkGrey' }}>
                <p id="searchable-textbox">{fileData}</p>
            </Box>

    }

    return (
        <div>
            <Container fixed>
                    {ButtonShelf}
                    {TextBox}
            </Container>
        </div>
    )
}
