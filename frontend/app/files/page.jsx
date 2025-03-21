import Link from "next/link";
import List_files from "./list_files"; 
import { Suspense } from "react";
import Loading from "../loading";

export default function files() {
  return (
    <main>
        
        {/* Nav display */}
        <nav>
          <h1>Filesystem contents</h1>
          <Link href="ENDPOINT">Upload file</Link>
        </nav>

        {/* Import files metadata */}
        <Suspense fallback={<Loading />}>
          <List_files />
        </Suspense>
        
    </main>  
  )
}
