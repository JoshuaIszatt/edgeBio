import List_jobs from "./list_jobs";
import { Suspense, use } from "react";
import Loading from "../loading";
import CreateModal from "./components/Create";

export default function jobs() {
  return (
    <main>

      {/* Nav display */}
      <h2>Jobs:</h2>
      <nav>
        <CreateModal />
      </nav>
    
      {/* Import jobs metadata */}
      <Suspense fallback={<Loading />}>
        <List_jobs />
      </Suspense>

    </main>
  )
}
