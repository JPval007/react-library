import ButtonComponent from "./components/ButtonComponent";
import Dismissive from "./components/Dismissive";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Dismissive close={() => setShow(false)}></Dismissive>}
      <ButtonComponent onClick={() => setShow(!show)} color="warning">
        Blue Button
      </ButtonComponent>
    </div>
  );
}

export default App;
