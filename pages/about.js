import Link from 'next/link'

export default () => {
  return (
    <>
      <div>about page</div>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  )
}
