import { TableOfContents } from "./TableOfContents";
import { TextFileViewer } from "../FileReader/TextFileViewer";
import { Container, Divider } from '@mui/material';
import { CssBaseline } from "@mui/material"


export const TableOfContentsDemo = () => {

    const DummyText =
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type 
     specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
     containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    let textbox =
        <nav>
            <h2 id="category-1">Category 1</h2>
            <p>{DummyText}</p>
            <h2 id="category-2">Category 2</h2>
            <p>{DummyText}</p>
            <h2 id="category-3">Category 3</h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h2 id="category-4">Category 4 </h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h2 id="category-5">Category 5 </h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
        </nav>
    
    return (
        <div >
            <CssBaseline />
            <div style={{ padding: "10px" }}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "25%", position: "sticky" }}>
                        <TableOfContents />
                    </div>

                    <Divider orientation="vertical" flexItem />
                    <div style={{ width: "75%", overflow:"auto", height:"300px"}}>{textbox}</div>
                </Container>
            </div>
        </div>
    )
}
