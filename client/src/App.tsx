import { FancyButton, Textbox } from "@recx/shared/ui";
import { greetUser } from "@recx/shared/functions";
import { User } from "@recx/shared/interfaces";

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

  return (
    <div className="App">
      <h1>Client App</h1>
      <FancyButton onClick={onGreetClicked} text="Click Client Button" />
      <Textbox placeholder={"Enter client name"} />
    </div>
  );
}

export default App;
