import { createRoot } from "react-dom/client";
import App from './Component/App';

document.addEventListener('DOMContentLoaded', () => {
    const rootId = document.getElementById('ppt-custom-tool');
    const root = createRoot(rootId)
    root.render(<App />)
})