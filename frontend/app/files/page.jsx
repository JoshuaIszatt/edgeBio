import List_files from "./list_files";
import { Suspense, use } from "react";
import Loading from "../loading";
import UploadModal from "./components/Upload";

export default function files() {
  // Define host and port
  const host = process.env.API_HOST || 'localhost'
  const port = process.env.API_PORT || '4000'

  return (
    <main>

      {/* Nav display */}
      <h1>Filesystem contents:</h1>
      <nav>
        <UploadModal host={host} port={port} />

        {/* ADD UPDATE BUTTON  
          <Link href="ENDPOINT">
            <button>Update</button>
          </Link>
          */}

        {/* ADD ARCHIVE BUTTON  
          <Link href="ENDPOINT">
            <button>Archive</button>
          </Link>
          */}
      </nav>

      {/* Import files metadata */}
      <Suspense fallback={<Loading />}>
        <List_files />
      </Suspense>

    </main>
  )
}
