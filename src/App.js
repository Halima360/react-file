import "./styles.css";
import { PostForm } from "./post/forms.js";

export default function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "greenyellow", paddingRight: "20px" }}
    >
      <PostForm />
    </div>
  );
}
