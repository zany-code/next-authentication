import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const {data : session} = useSession();
  const [loading, setLoading] = useState(true)
  return (
    <div>
      <h1>Home Page</h1>
      <h3> {session ? `${session.user.name},` : ''} Selamat Datang</h3>
    </div>
  )
}
