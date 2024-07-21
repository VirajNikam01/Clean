import Header from './Header'

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className=''>
            <Header />
            {children}
        </div>
    )
}

export default Layout
