import Footer from '@/components/Footer/Footer';
import DesktopNav from '@/components/Navbar/DesktopNav';
import MobileNav from '@/components/Navbar/MobileNav';
import "tw-elements/dist/css/tw-elements.min.css";
import './globals.css';
import { Providers } from './providers';

export const metadata = {
    title: 'Primetouch',
    description: 'E commerce website to discover the art of dressing up',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <MobileNav />
                    <DesktopNav />
                    <div className='mt-20'>
                        {children}
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
