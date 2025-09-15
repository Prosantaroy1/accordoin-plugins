import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './style.scss'

export default function App() {

    const [name, setName] = useState('');
    const [role, setRole] = useState('')
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const { ppt_tool_ajax = {} } = window;
    const { nonce, ajax_url } = ppt_tool_ajax;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        //console.log(file)
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {

        const loadSavedData = async () => {
            try {
                const response = await fetch(`${ajax_url}?action=ppt_get_customTool_save&nonce=${nonce}`);
                const data = await response.json();
                if (data.success) {
                    setName(data.data.name || '');
                    setRole(data.data.role || '');
                    setImagePreview(data.data.image_url || '');
                }
            } catch (error) {
                toast.error('Error loading room data:', error);
            }
        };

        loadSavedData();

    }, []);

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('action', 'ppt_customTool_save');
        formData.append('nonce', nonce);
        formData.append('name', name);
        formData.append('role', role);
        formData.append('image', image);

        try {
            const res = await fetch(ajax_url, {
                method: 'POST',
                body: formData,
            })
            const data = await res.json();

            if (data.success) {
                toast.success('saved successfully!');
            }
        } catch (error) {
            toast.error('error data', error)
        }


    }

    return (
        <div id="hrb-app-wrapper">
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
            <div>
                <h2>Admin Dashboard</h2>
                <p></p>
            </div>
            <div className="hrb-editor-container">
                <div className="hrb-settings-panel">
                    <div className="hrb-setting-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name ?"
                        />
                    </div>
                    <div className="hrb-setting-group">
                        <label>Role</label>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Enter your Role ?"
                        />
                    </div>

                    <div className="hrb-setting-group">
                        <label>Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>

                    <button className="hrb-save-button" onClick={handleSave}>
                        Add Now
                    </button>

                </div>

                <div className="hrb-preview-panel">
                    <article className="sic-card">
                        <div className="sic-media">
                            <img src={imagePreview} className="sic-img" />
                        </div>
                        <div className="sic-body">
                            <h3 className="sic-name">{name}</h3>
                            <p className="sic-role">{role}</p>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    )
}
