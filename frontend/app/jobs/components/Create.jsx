"use client";

import { useState, useEffect } from "react";

export default function CreateModal() {

    // Modal component state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        window.location.reload(); // Reload the page when the modal closes
    };

    // Form state
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(false);
    const [files, setFiles] = useState([]);
    const [pipeline, setPipeline] = useState("test");
    const [fileOptions, setFileOptions] = useState([]);

    // Fetch file options from the API
    useEffect(() => {
        const fetchFileOptions = async () => {
            try {
                const response = await fetch("http://localhost:4000/files");
                if (response.ok) {
                    const data = await response.json();
                    
                    // DEBUG
                    console.log("DEBUG")
                    console.log(data);
                    console.log("DEBUG")

                    setFileOptions(data.files || []);
                } else {
                    console.error("Failed to fetch file options");
                }
            } catch (error) {
                console.error("Error fetching file options:", error);
            }
        };

        fetchFileOptions();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const job = {
            name,
            description,
            priority,
            files,
            pipeline,
            status: "pending"
        };

        try {
            const response = await fetch("http://localhost:4000/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(job)
            });

            if (response.ok) {
                console.log("Job created successfully!");
                alert("Job created successfully!");
                closeModal();
            } else {
                console.log("Failed to create job");
                alert("Failed to create job.");
            }
            console.log(response);
        } catch (error) {
            console.error("Error creating job:", error);
            alert("An error occurred while creating the job.");
        }
    };

    // Create button
    if (!isModalOpen) return <button onClick={openModal}>Create Job</button>;

    // Form
    return (
        <div className="modal">
            <div className="create-modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Create Job</h2>
                <form onSubmit={handleSubmit}>

                    <div>
                        {/* Name input */}
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                        {/* Description input */}
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

                        {/* Priority checkbox */}
                        <label htmlFor="priority">Priority:</label>
                        <input type="checkbox" id="priority" name="priority" checked={priority} onChange={(e) => setPriority(e.target.checked)} />

                        {/* File options */}
                        <label htmlFor="files">Files:</label>
                        <select multiple id="files" name="files" value={files} onChange={(e) => setFiles(Array.from(e.target.selectedOptions, option => option.value))} required>
                            {fileOptions.map((file) => (
                                <option key={file.filepath} value={file.filepath}>{file.filepath}</option>
                            ))}
                        </select>
                        
                        {/* Pipeline select */}
                        <label htmlFor="pipeline">Pipeline:</label>
                        <select id="pipeline" name="pipeline" value={pipeline} onChange={(e) => setPipeline(e.target.value)} required>
                            <option value="phanta">Phanta</option>
                            <option value="phunky">Phunky</option>
                            <option value="test">Test</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <button type="submit">Create</button>
                </form>
            </div >
        </div >
    );
}
