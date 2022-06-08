import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = ({repositories, date}: any) => {
  return (
    <>
        {date}
        {repositories.map((repo: string) => (
        <li key={repo}>{repo}</li>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/edsoncarlosdvp/repos')

  const data = await response.json()
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toString()
    },
    revalidate: 5
  }
}

export default Home