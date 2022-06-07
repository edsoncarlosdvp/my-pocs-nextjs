import type { GetServerSideProps, NextPage } from 'next'
import { ServerSideRedering } from '../Features/SSG'

const Home: NextPage = ({repositories}: any) => {
  return (
    <>
      <ServerSideRedering>
        {repositories.map((repo: string) => (
        <li key={repo}>{repo}</li>
      ))}
      </ServerSideRedering>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/edsoncarlosdvp/repos')

  const data = await response.json()
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames
    }
  }
}

export default Home