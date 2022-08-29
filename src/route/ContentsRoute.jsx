import Contents from "../components/contents/Contents";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ContentsRoute = () => {
    return(
        <>
            <DndProvider backend={HTML5Backend}>
                <Contents />
            </DndProvider>
        </>
    )
}

export default ContentsRoute;