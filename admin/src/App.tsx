import { User, GreetUser, FancyButton, Textbox } from "@monorepo/shared";
import "./App.css";

function App() {
  const user: User = {
    firstName: "Admin",
    lastName: "User",
    email: "adminuser@test.com",
    isAdmin: true,
  };

  const onGreetClicked = () => {
    GreetUser(user);
  };

  const handleClick = () => {
    console.log("Button clicked!");
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
