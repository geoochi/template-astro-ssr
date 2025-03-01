export const prerender = false

export function GET() {
  return new Response(
    JSON.stringify({ message: 'Hello, world!', randomNum: Math.random() }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
