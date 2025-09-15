import { createRoot } from "react-dom/client";
import TestimonialMenu from './Testimonial/TestimonialMenu';


document.addEventListener('DOMContentLoaded', () => {
    const rootId = document.getElementById('easy-testimonial-app');
    const root = createRoot(rootId)
    root.render(<TestimonialMenu />)
})