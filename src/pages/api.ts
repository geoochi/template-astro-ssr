export const prerender = false

let count = 0

export function GET() {
  return new Response(JSON.stringify({ count }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function POST() {
  count++
  return new Response(JSON.stringify({ count }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
