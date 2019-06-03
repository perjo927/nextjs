import Layout from '../components/mylayout.js'

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  )
}

// components/MyLayout.js

// import withLayout from '../components/MyLayout'

// const Page = () => <p>This is the about page</p>

// export default withLayout(Page)


// import Layout from '../components/MyLayout.js'

// const aboutPageContent = <p>This is the about page</p>

// export default function About() {
//   return <Layout content={aboutPageContent} />
// }