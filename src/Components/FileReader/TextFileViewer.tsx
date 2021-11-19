import { useState, useEffect } from 'react';
import { Container, TextField, Button, ButtonGroup, InputLabel, Select, MenuItem, FormControl, Box } from '@mui/material';

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
    }

    const handleSelect = (e: any) => {
        setCategoryName(e.target.value);
    }

    const handlOnJumpToCategoryClick = () => {
        let keyWord = categoryName;
        let text = document.getElementById("searchable-textbox")?.textContent;

        let pattern = RegExp(`${keyWord}`, 'g');
        let modifiedText = text!.replace(pattern, `<mark>${keyWord}</mark>`)!;
        document.getElementById("searchable-textbox")!.innerHTML = modifiedText!;
        console.log('Inner Html:' + document.getElementById("searchable-textbox")!.innerHTML);
    }
    // ******************      HTML      ******************

    let TextBox;
    if (fileData == "" || fileData == null)
        TextBox = <Box sx={{ height: 100, backgroundColor: 'DarkGrey' }} />
    else
        TextBox =
            <Box sx={{ height: 100, backgroundColor: 'DarkGrey' }}>
                <p id="searchable-textbox">{fileData}</p>
            </Box>


    return (
        <div>
            {/* File Reader HTML */}
            <Container fixed>
                <div>
                    <input type="file" accept="text/*" value={inputValue} onChange={handleOnFileChange} />
                    {TextBox}
                    <Button fullWidth variant="contained" color="error" onClick={handleOnClearTextClick}> Clear</Button>
                </div>

                <div style={{ marginTop: "10px" }} />

                {/* Keyword Finder HTML */}
                <ButtonGroup fullWidth variant="text" aria-label="outlined primary button group">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"> Categories </InputLabel>
                        <Select labelId="demo-simple-select-label" id="keyword" value={categoryName} label="Order Category" onChange={handleSelect}>
                            <MenuItem value="Lorem">Lorem</MenuItem>
                            <MenuItem value="Ipsum">Ipsum</MenuItem>
                        </Select>
                    </FormControl>

                    <Button color="primary" onClick={handlOnJumpToCategoryClick}> Find Keyword </Button>
                </ButtonGroup>
            </Container>


        </div>
    )
}

//   <TextField id="searchable-textbox" focused multiline fullWidth value={fileData} disabled maxRows={8} variant="filled" />
