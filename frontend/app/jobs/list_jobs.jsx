import DeleteJob from "./components/Delete"

// Destination
const host = process.env.API_HOST || 'localhost'
const port = process.env.API_PORT || '4000'

// Function to get jobs metadata
async function get_jobs() {
  try {
      // Endpoint
      const url = `http://${host}:${port}/jobs`
      const res = await fetch(url, {
          next: {
              revalidate: 0
          }
      })

      // Error catch
      if (!res.ok) {
          notFound()
      }

      return res.json()
  } catch (error) {
      console.error(error)
      return false
  }
}

export default async function List_jobs() {

  // Get metadata
  const jobs_metadata = await get_jobs()

  // Convert to array
  const data = jobs_metadata.jobs

  // DEBUG
  //console.log(data)

  // Return data
  return (
    <div className="jobBoxContainer">
    {/* Display jobs metadata */}
      {data.map((job) => (
        <div className={job.priority ? "priority-jobBox" : "jobBox"} key={job._id}>
          <h3>{job.name}</h3>
          
          {job.priority === true && (
            <h4>Priority sample</h4>
          )}

          <p>Description: {job.description}</p>
          <p>Time of creation: {job.created_at}</p>
          
          {job.status === 'finished' && (
            <p>Finished at: {job.finished_at}</p>
          )}
          <p>Status: <strong>{job.status}</strong></p>

          {/* Delete button */}
          <DeleteJob id={job._id} host={host} port={port} />

        </div>
      ))}

    {/* Error catch */}
      {data.length === 0 && (
        <h3>No jobs to display</h3>
      )}
    </div>
  )
}
