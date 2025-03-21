// Function to get files metadata
async function get_metadata() {
  try {
      // DEBUG 2s (For loading page)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Get data
      const url = 'http://localhost:4000/files'
      const res = await fetch(url, {
          next: {
              revalidate: 0 // This will not revalidate the data
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
  console.log(data)

  // Return data
  return (
    <>
    {/* Display files metadata */}
      {data.map((file) => (
        <div key={file.id}>
          <h2>{file.filename}</h2>
          <p>{file.filetype}</p>
          <p>{file.upload_at}</p>
          <p>{file.size}</p>
          <p>{file.filepath}</p>
          <br />
        </div>
      ))}

    {/* Error catch */}
      {data.length === 0 && (
        <h3>No files to display</h3>
      )}
    </>
  )
}
