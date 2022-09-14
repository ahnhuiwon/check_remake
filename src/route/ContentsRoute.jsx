import React, {Suspense} from "react";
import Contents from "../components/contents/Contents";
import Loading from "../components/common/Loading";

const ContentsSplit = React.lazy(()=> import('../components/contents/Contents'));

const ContentsRoute = () => {
    return(
        <>
            <Suspense fallback={<Loading />}>
                <ContentsSplit />
            </Suspense>
        </>
    )
}

export default ContentsRoute;