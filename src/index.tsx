import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";

const root: HTMLElement = document.createElement('div');
root.setAttribute('id', 'root');

document.body.insertAdjacentElement('afterbegin', root);
ReactDOM.createRoot(root).render(<App />);
