import { FancyButton, Textbox } from "@monorepo/shared/ui";
import { greetUser } from "@monorepo/shared/functions";
import { User } from "@monorepo/shared/interfaces";

import "./App.css";

function App() {
  const user: User = {
    firstName: "Client",
    lastName: "User",
    email: "clientuser@test.com",
    isAdmin: false,
  };

  const onGreetClicked = () => {
    greetUser(user);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <h1>Client App</h1>
      <FancyButton onClick={onGreetClicked} text="Click Client Button" />
      <Textbox placeholder={"Enter client name"} />
    </div>
  );
}

export default App;
