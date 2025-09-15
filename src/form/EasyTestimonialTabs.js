import { useState } from "react";
import './tabs.scss'
import BacisTheme from './Testimonial/BacisTheme';

export const EasyTestimonialTabs = () => {
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <div className="tab-container">
            {/* ---- Tabs Header ---- */}
            <div className="tabs-row">
                {['basic', 'setting', 'advance', 'get'].map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "tab active" : "tab"}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>


            {/* ---- Tabs Content ---- */}
            <div className="tab-content">
                {activeTab === "basic" && (
                    <div className="tab-panel">
                        <h2>Basic Section</h2>
                        <p>এখানে শুধু title এবং description দেখাবে। (Static বা read-only content রাখতে পারো।)</p>
                        <BacisTheme />
                    </div>
                )}


                {activeTab === "setting" && (
                    <div className="tab-panel">
                        <h2>Settings</h2>
                        <form className="custom-form">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea placeholder="Enter description"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Save</button>
                        </form>
                    </div>
                )}


                {activeTab === "advance" && (
                    <div className="tab-panel">
                        <h2>Advance Options</h2>
                        <label><input type="checkbox" /> Enable Dark Mode</label><br />
                        <label><input type="checkbox" /> Show Extra Features</label>
                    </div>
                )}


                {activeTab === "get" && (
                    <div className="tab-panel price-cards">
                        <h2>Get Price</h2>
                        <p>আমার প্রাইস লিস্ট:</p>
                        <div className="cards-row">
                            <div className="price-card">
                                <h3>Basic Plan</h3>
                                <p>$10</p>
                                <button className="btn-select">Select</button>
                            </div>
                            <div className="price-card">
                                <h3>Pro Plan</h3>
                                <p>$20</p>
                                <button className="btn-select">Select</button>
                            </div>
                            <div className="price-card">
                                <h3>Enterprise</h3>
                                <p>$50</p>
                                <button className="btn-select">Select</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
