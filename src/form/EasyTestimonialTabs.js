import React, { useState } from "react";
import './tabs.scss'

export const EasyTestimonialTabs = () => {
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <div className="tab-container">
            {/* ---- Tabs Header ---- */}
            <div className="tabs-row">
                <button
                    className={activeTab === "basic" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("basic")}
                >
                    Basic
                </button>
                <button
                    className={activeTab === "setting" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("setting")}
                >
                    Setting
                </button>
                <button
                    className={activeTab === "advance" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("advance")}
                >
                    Advance
                </button>
                <button
                    className={activeTab === "get" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("get")}
                >
                    Get
                </button>
            </div>

            {/* ---- Tabs Content ---- */}
            <div className="tab-content">
                {activeTab === "basic" && (
                    <div>
                        <h2>Basic Section</h2>
                        <p>
                            এখানে শুধু title এবং description দেখাবে।
                            (Static বা read-only content রাখতে পারো।)
                        </p>
                    </div>
                )}

                {activeTab === "setting" && (
                    <div>
                        <h2>Settings</h2>
                        <form>
                            <label>
                                Title:
                                <input type="text" placeholder="Enter title" />
                            </label>
                            <br />
                            <label>
                                Description:
                                <textarea placeholder="Enter description"></textarea>
                            </label>
                            <br />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                )}

                {activeTab === "advance" && (
                    <div>
                        <h2>Advance Options</h2>
                        <label>
                            <input type="checkbox" /> Enable Dark Mode
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> Show Extra Features
                        </label>
                    </div>
                )}

                {activeTab === "get" && (
                    <div>
                        <h2>Get Price</h2>
                        <p>আমার প্রাইস লিস্ট:</p>
                        <ul>
                            <li>Basic Plan – $10</li>
                            <li>Pro Plan – $20</li>
                            <li>Enterprise – $50</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
