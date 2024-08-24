import { createClient } from '~/lib/supabase'
import Outfits from './components/outfits'

export default async function Page() {
  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  const { data } = await supabase.storage.from('outfits').list(user?.email)

  return (
    <main
      className={'max-w-6xl mx-auto mt-2 mb-16 p-6 bg-default/75 rounded-lg shadow-lg'}
    >
      <Outfits
        email={user?.email!}
        state={data!.filter(({ name }) => name.endsWith('.webp'))}
      />
    </main>
  )
}
