import { Box } from "@chakra-ui/react";
import "./App.css";
import {Home} from "./pages/Home"

function App() {
  return (
    <Box bgColor="#F6F8FA" className="App" color="#1C4980">
      <Home/>
    </Box>
  );
}

export default App;