import Head from 'next/head'
import { PostCard, Category, PostWidget } from '../components'
import '../styles/Home.module.scss'

const posts=[
  {title:"React Testing", excerpt:"Learn react"},
  {title:"React with Tailwind", excerpt:"Learn React with Tailwind "},
]
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
  <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
    <div className='lg:col-span-8 col-span-1'>
        {posts.map((post)=><PostCard post={post} key={post.title}/>
        )}
     </div>
          <div className='lg:col-span-4 col-span-4'>
            <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Category/>
            </div>
          </div>
      
      </div>
    </div>
  )
}
