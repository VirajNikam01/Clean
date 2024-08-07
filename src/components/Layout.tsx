import Header from './Header'
import CheckInternet from './CheckInternet'

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {



    return (
        <div className=''>
            <CheckInternet >
                <Header />
                {children}
            </CheckInternet>
        </div>
    )
}

export default Layout
