import { Flex, Grid } from '@chakra-ui/react';
import Headers from './Pages/Headers/headers';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Navbar />
        {
          isMobile? (
            <Grid templateRows={'repeat, 1fr'}>
           <Slideshow />
          <Slideshow />
        </Grid>
          ) : 
          <Flex>
           <Slideshow />
          <Slideshow />
        </Flex>
        }
    {/* <Headers /> */}
    </>
  );
}

export default App;
