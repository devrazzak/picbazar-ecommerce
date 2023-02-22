import CustomLayout from "@/components/layouts/custom-layout";
import About from "@/pages/about";

function News() {
    return (
        <div>
            <h2>News Page</h2>
        </div>
    )
}
export default News
News.getLayout = function getLayout (page: React.ReactElement){
    return <CustomLayout>{page}</CustomLayout>
}