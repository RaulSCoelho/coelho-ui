import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Components'
}

export default function Page() {
  return redirect('components/accordion')
}
