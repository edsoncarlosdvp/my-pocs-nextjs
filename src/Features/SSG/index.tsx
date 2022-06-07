interface RepositoriesProps {
  children: React.ReactNode;
}

export const ServerSideRedering = ({ children }: RepositoriesProps) => {
  return (
    <ul>
      {children}
    </ul>
  )
}