import Link from 'next/link'

const Home = () => {
  return <div>
    <div>Welcome to Next.js!</div>
    <Link href='/about'><a>about</a></Link>
  </div>
}

export default Home
