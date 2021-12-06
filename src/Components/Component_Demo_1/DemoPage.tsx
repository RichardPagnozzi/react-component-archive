import { CssBaseline } from "@mui/material"
import SearchAppBar from "./Nav Bar/NavBar"
import { TextFileViewer } from "./FileReader/TextFileViewer"


export const DemoPage = () => {
    return (
        <div >
            <CssBaseline />
            <SearchAppBar />
            <div style={{ padding: "10px" }}>
                <TextFileViewer />
            </div>
        </div>
    )
}