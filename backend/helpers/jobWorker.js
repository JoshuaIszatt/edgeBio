async function sendJobData(jobData) {
    try {
        const response = await fetch('http://127.0.0.1:5000/process_job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        });

        if (!response.ok) {
            throw new Error(`Error sending job data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending job data:', error);
        throw error;
    }
}

module.exports = sendJobData;
