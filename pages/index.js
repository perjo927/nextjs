// import Layout from '../components/MyLayout.js'

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   )
// }


// import withLayout from '../components/MyLayout'

// const Page = () => <p>Hello Next.js</p>

// export default withLayout(Page)



// import Layout from '../components/MyLayout.js'

// const indexPageContent = <p>Hello Next.js</p>

// export default function Index() {
//   return <Layout content={indexPageContent} />
// }

import Layout from '../components/mylayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}