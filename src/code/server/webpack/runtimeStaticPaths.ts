import path from 'path'

export const getRuntimeStaticPaths = () => {
  const root = process.cwd()

  return {
    server: path.join(root, 'lib', 'server'),
    client: path.join(root, 'lib', 'client'),
  }
}
