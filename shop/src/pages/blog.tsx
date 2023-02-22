import CustomLayout from "@/components/layouts/custom-layout";

function Blog() {
    return (
        <div>
            <h2>Blog</h2>
        </div>
    )
}
export  default Blog
Blog.getLayout = function getLayout (page: React.ReactElement){
    return <CustomLayout>{page}</CustomLayout>
}