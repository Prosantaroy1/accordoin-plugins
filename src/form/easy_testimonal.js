import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { EasyTestimonialTabs } from './EasyTestimonialTabs';

const EasyTestimonialApp = () => {
    const el = document.getElementById("easy-testimonial-app");
    const initialData = el?.dataset.saved ? JSON.parse(el.dataset.saved) : [];

    const [saved, setSaved] = useState(initialData);
    const [title, setTitle] = useState("");

    //console.log(saved)

    // useEffect(() => {
    //     if (el) {
    //         el.removeAttribute("data-saved");
    //     }
    // }, [el]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return alert("Title is empty!");

        const formData = new FormData();
        formData.append("action", "easy_testimonial_save");
        // eslint-disable-next-line no-undef
        formData.append("nonce", easy_testimonial_ajax.nonce);
        formData.append("title", title.trim());

        try {
            // eslint-disable-next-line no-undef
            const res = await fetch(easy_testimonial_ajax.ajax_url, {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.success) {
                setSaved(data.data.saved_data);
                setTitle("");
            } else {
                alert(data.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="wrap">
            <h1>Easy Testimonial Settings</h1>
            <form onSubmit={handleSubmit}>
                Title:{" "}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit">Save</button>
            </form>

            <div style={{ marginTop: "20px" }}>
                {saved.length > 0 && (
                    <div>
                        <h3>Saved Titles:</h3>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                marginTop: "10px",
                                textAlign: "center",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "8px",
                                            background: "#f4f4f4",
                                        }}
                                    >
                                        #
                                    </th>
                                    <th
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "8px",
                                            background: "#f4f4f4",
                                        }}
                                    >
                                        Title
                                    </th>
                                    <th
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "8px",
                                            background: "#f4f4f4",
                                        }}
                                    >
                                        Time
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {saved.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                            {index + 1}
                                        </td>
                                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                            {item.title}
                                        </td>
                                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                            {item.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <EasyTestimonialTabs />
        </div>
    );
};

// Render in admin
const container = document.getElementById("easy-testimonial-app");
if (container) {
    const root = createRoot(container);
    root.render(<EasyTestimonialApp />);
}
