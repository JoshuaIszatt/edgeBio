import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <pre>
        edgeBio compute node</pre>
      <br />
      <div className='navbar-right'>

        <Link href="/">About</Link>
        <Link href="/files">Filesystem</Link>       
        <Link href="/pipelines">Pipelines</Link>
        <Link href="/jobs">Jobs</Link>

      </div>
    </nav>
  )
}
