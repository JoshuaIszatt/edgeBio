import Link from "next/link";
import List_files from "./list_files"; 
import { Suspense } from "react";
import Loading from "../loading";

export default function files() {
  return (
    <main>
        
        {/* Nav display */}
        <h1>Filesystem contents:</h1>
        <nav>
          <Link href="/files/upload">
            <button>Upload</button>
          </Link>

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
