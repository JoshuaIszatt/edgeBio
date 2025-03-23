import List_files from "./list_files";
import { Suspense, use } from "react";
import Loading from "../loading";
import UploadModal from "./components/Upload";

export default function files() {
  return (
    <main>

      {/* Nav display */}
      <h1>Filesystem contents:</h1>
      <nav>
        <UploadModal />

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
