import { FancyButton, Textbox } from "@recx/shared/ui";
import { greetUser } from "@recx/shared/functions";
import { User } from "@recx/shared/interfaces";

import "./App.css";

function App() {
  const user: User = {
    firstName: "Admin",
    lastName: "User",
    email: "adminuser@test.com",
    isAdmin: true,
  };

  const onGreetClicked = () => {
    greetUser(user);
  };

  return (
    <div className="App">
      <h1>Admin App</h1>
      <FancyButton onClick={onGreetClicked} text="Click Admin Button" />
      <Textbox placeholder={"Enter admin name"} />
    </div>
  );
}

export default App;
