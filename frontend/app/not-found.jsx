import Link from "next/link"

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3x1'>Error: page does not exist</h2>
        <p>Head back to the <Link href='/'>ABOUT</Link> page</p>
    </main>
  )
}
