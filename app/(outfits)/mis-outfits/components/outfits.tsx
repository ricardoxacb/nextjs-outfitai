'use client'

import Image from 'next/image'
import { useOptimistic } from 'react'
import { twJoin } from 'tailwind-merge'
import { removeOutfit } from '~/lib/actions'

interface Props {
  email: string
  state: Array<{ id: string; name: string }>
}

export default function Outfits({ email, state }: Props) {
  const [optimisticState, addOptimistic] = useOptimistic(state, (oufits, id) => {
    return oufits.filter(oufit => oufit.id !== id)
  })

  if (optimisticState.length === 0) {
    return (
      <p className="my-4 text-center text-primary/75 tracking-wide">
        No tienes ningún outfit guardado.
      </p>
    )
  }

  return (
    <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {optimisticState.map(({ id, name }) => (
        <article className="relative" key={id}>
          <button
            className={twJoin(
              'absolute right-0 top-0 z-10 rounded-bl-full bg-default p-0.5 pb-2 pl-2',
              'text-danger transition-colors hover:text-danger/75'
            )}
            onClick={async () => {
              addOptimistic(id)
              await removeOutfit(email, name)
            }}
          >
            <svg
              className="w-4 fill-none stroke-2 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
          <Image
            src={`outfits/${email}/${name}`}
            alt=""
            width={512}
            height={512}
            priority
          />
        </article>
      ))}
    </div>
  )
}
