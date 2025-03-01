import { navigate } from 'astro:transitions/client'
import { Button } from './ui/button'

export default function Navigate(props: { destination: string, children: React.ReactNode }) {
    return <Button onClick={() => navigate(props.destination)}>{props.children}</Button>
}