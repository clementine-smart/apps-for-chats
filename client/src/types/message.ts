export interface MessageType {
  message: string
  from: 'me' | 'you' | 'computer'
  user: string
  thread?: string
}