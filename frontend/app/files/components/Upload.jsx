"use client";

import { useState } from "react";

export default function UploadModal() {

  // Modal component state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Reload the page when the modal closes
  };

  // File state
  const [file, setFile] = useState(null);

  // Handle files
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
        closeModal();
      } else {
        console.log("Failed to upload")
        alert("Failed to upload file.");
      }
      console.log(response)
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  // Upload button
  if (!isModalOpen) return <button onClick={openModal}>Upload</button>;

  // Form
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Upload File</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="file">File:</label>
            <input type="file" id="file" name="file" onChange={handleFileChange} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
          </div>
          <div>
            <label htmlFor="fileType">File Type:</label>
            <select id="fileType" name="fileType">
              <option value=".fasta">.fasta</option>
              <option value=".fa">.fa</option>
              <option value=".fastq">.fastq</option>
              <option value=".fastq.gz">.fastq.gz</option>
            </select>
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}
