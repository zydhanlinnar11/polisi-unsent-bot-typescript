// Use process.env
import dotenv from 'dotenv'
dotenv.config()

export function sayHelloWorld(world: string) {
  return `Hello ${world}`
}
