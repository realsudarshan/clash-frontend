import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      
      <div className='flex flex-col justify-center items-center'>
     <Image src="/404img.svg"
width={500}
height={500}
alt="404 img"
/>
</div>
<Link href="/">
<h1 className='text-red-600'>Visit Homepage</h1>
</Link>
</>

  )
}