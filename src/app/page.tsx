import { redirect } from 'next/navigation'

// Redirect root URL to default locale (Indonesian)
export default function RootPage() {
  redirect('/id')
}
