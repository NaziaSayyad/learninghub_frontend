
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
        <Navbar />
        <AllRoutes />
        <Heading > Main page </Heading>
    </>
  );
}
/* This is the app page where only routes navbar and footer component loaded   
*/


export default App;