export const prerender = false

let count = 0

export function GET() {
  return new Response(JSON.stringify({ count }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function POST({ request }: { request: Request }) {
  const data = await request.json()
  count = parseInt(data.count)
  return new Response(null)
}
