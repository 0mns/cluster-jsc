import Nav from './Nav'
import Script from 'next/script'

const Layout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            {children}
            <Script src="https://jsc.gov.mv/js/sticky_nav.js"  strategy="afterInteractive" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"   strategy="afterInteractive" />

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"   strategy="afterInteractive"/>
        </div>
    )
}

export default Layout