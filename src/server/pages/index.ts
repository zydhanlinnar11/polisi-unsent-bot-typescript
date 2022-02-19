import { Request, Response } from 'express'
import APIResponse from '@/types/APIResponse'

export default function HomePage(_req: Request, res: Response) {
  const response: APIResponse<string> = {
    status: 'success',
    data: 'Server status OK',
  }
  res.json(response)
}
