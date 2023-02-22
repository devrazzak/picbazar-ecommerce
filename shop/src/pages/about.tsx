import CustomLayout from "@/components/layouts/custom-layout";
const About = () => {
    return(
        <div>About</div>
    )
}

export default About

About.getLayout = function getLayout (page: React.ReactElement){
    return <CustomLayout>{page}</CustomLayout>
}