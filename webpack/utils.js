import path from 'path'

export function root(...paths) {
  return path.join(process.cwd(), ...paths)
}
