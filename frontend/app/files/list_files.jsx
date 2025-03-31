import DeleteMetadata from "./components/Delete"

// Define host and port
const host = process.env.API_HOST || 'localhost'
const port = process.env.API_PORT || '4000'

// Function to get files metadata
async function get_metadata() {
  try {
      // DEBUG 2s (For loading page)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Destination
      const url = `http://${host}:${port}/files`
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


export default async function List_files() {

  // Get metadata
  const files_metadata = await get_metadata()

  // Convert to array
  const data = files_metadata.files

  // DEBUG
  //console.log(data)

  // Return data
  return (
    <>
    {/* Display files metadata */}
      {data.map((file) => (
        <div className="fileBox" key={file._id}>
          <h2>{file.filename}</h2>
          <p>Filepath: {file.filepath}</p>
          <p>File type: {file.filetype}</p>
          <p>Time of upload: {file.upload_at}</p>
          <p>File size (bytes): {file.size}</p>

          {/* Delete button */}
          <DeleteMetadata id={file._id} host={host} port={port} />
        </div>
      ))}

    {/* Error catch */}
      {data.length === 0 && (
        <h3>No files to display</h3>
      )}
    </>
  )
}
