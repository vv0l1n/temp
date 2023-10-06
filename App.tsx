/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Backdrop, BackdropSubheader, Button } from "@react-native-material/core";
import { View } from "react-native";

function App(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Backdrop
      revealed={open}
      style={{
        backgroundColor: 'red',
      }}
      backLayer={<View style={{ height: '80%' }} />}
    >
      <BackdropSubheader title={"dupa"} />
      <Button title={!open ? "Close" : "Open"} onPress={() => setOpen(prevState => !prevState)}></Button>
    </Backdrop>
  );
}

export default App;
