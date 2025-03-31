import List_jobs from "./list_jobs";
import { Suspense, use } from "react";
import Loading from "../loading";
import CreateModal from "./components/Create";

export default function jobs() {
  // Set host and port
  const host = process.env.API_HOST || 'localhost'
  const port = process.env.API_PORT || '4000'


  return (
    <main>

      {/* Nav display */}
      <h2>Jobs:</h2>
      <nav>
        <CreateModal host={host} port={port} />
      </nav>
    
      {/* Import jobs metadata */}
      <Suspense fallback={<Loading />}>
        <List_jobs />
      </Suspense>

    </main>
  )
}
