import type { GetServerSideProps, NextPage } from 'next'

export const StaticSideRedering: NextPage = ({ repositories }: any) => {
  return (
    <ul>
      {repositories.map((repo: string) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
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