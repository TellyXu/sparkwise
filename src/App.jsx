import { useEffect, useState } from 'react';
import Page1 from './Page1/index_Desktop';
import Page2 from './Page2/index_Mobile';

export default function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let content, designWidth;
    if (windowWidth >= 960) {
        content = <Page1 />;
        designWidth = 1280;
    } else {
        content = <Page2 />;
        designWidth = 375;
    }

    const scale = windowWidth / designWidth;

    return (
        <div
            style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: designWidth,
            }}
        >
            {content}
        </div>
    );
}


