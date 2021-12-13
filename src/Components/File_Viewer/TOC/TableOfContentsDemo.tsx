import { TableOfContents } from "./TableOfContents";
import { TextFileViewer } from "../FileReader/TextFileViewer";
import { Container, Divider } from '@mui/material';
import { CssBaseline } from "@mui/material"


export const TableOfContentsDemo = () => {



    return (
        <div >
            <CssBaseline />
            <div style={{ padding: "10px" }}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "25%", position: "sticky" }}><TableOfContents /></div>
                    <Divider orientation="vertical" flexItem />
                    <div style={{ width: "75%" }}><TextFileViewer /></div>
                </Container>
            </div>
        </div>
    )
}
