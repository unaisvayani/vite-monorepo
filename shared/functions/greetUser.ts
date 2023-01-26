import { User } from "../interfaces/User";

export function greetUser(user: User) {
  alert(
    `Hello, ${user.firstName} ${user.lastName}! You are ${
      user.isAdmin ? "an admin." : "not an admin."
    }`
  );
}
