
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  document.body.innerHTML = '<div>Error: Could not find root element</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React application successfully rendered");
  } catch (error) {
    console.error("Failed to render the React application:", error);
    rootElement.innerHTML = '<div>Error: Failed to render the application</div>';
  }
}
