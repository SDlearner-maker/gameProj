import "./styles.css";
import Counter from "./Counter";
export default function App() {
  return (
    <div className="App">
      <h1>Counter with Persisting value</h1>
      <h2>We are storing count value in localStorage</h2>
      Complete tutorial on Medium...
      <Counter />
      <footer
        style={{
          padding: 5,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#cccc",
          margin: "0, auto",
          position: "fixed",
          bottom: 0,
          left: 0
        }}
      >
        <a href="https://javascript.plainenglish.io/create-dynamic-web-page-transitions-with-the-built-in-view-transitions-api-no-third-party-libraries-5f555c74f39a">
          Complete tutorial on Medium
        </a>
      </footer>
    </div>
  );
}
