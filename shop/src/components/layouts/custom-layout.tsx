import HeaderMinimal from "@/components/layouts/header-minimal";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import MobileNavigation from "@/components/layouts/mobile-navigation";
import MainHeader from "@/components/layouts/main-header";

export default function CustomLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
            <MainHeader/>
            {children}
        </div>
    )
}