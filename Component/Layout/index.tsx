import Footer from "./Footer"
import Header from "./Header"
const Index = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Index