'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import Image from 'next/image'
import { twJoin } from 'tailwind-merge'
import Button from '~/components/button'
import useUpload from '../hooks/use-upload'
import Modal from './modal'

interface Props {
  email: string
  gender: string
}

export default function Upload({ email, gender }: Props) {
  const {
    file,
    description,
    outfit,
    isLoading,
    getRootProps,
    getInputProps,
    setFile,
    setDescription,
    setOutfit,
    generateOutfit
  } = useUpload(gender)

  return (
    <>
      <div
        {...getRootProps({
          className: twJoin(
            'relative mb-4 flex justify-center cursor-pointer hover:underline',
            'md:col-span-full'
          )
        })}
      >
        <input {...getInputProps()} />
        <span className="relative z-10 bg-grey px-6 text-primary/80">
          Subir imagen y generar outfit
        </span>
        <span
          className={twJoin(
            'absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent',
            'bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'
          )}
        />
      </div>
      <Transition show={!!file}>
        <Dialog
          className="relative z-10"
          onClose={() => {
            if (!isLoading) {
              setFile(null)
              setDescription('')
            }
          }}
        >
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="fixed inset-0 bg-primary bg-opacity-50 transition-opacity" />
          </TransitionChild>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className={
                'flex min-h-full items-center justify-center p-4 text-center sm:p-0'
              }
            >
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  className={twJoin(
                    'relative transform overflow-hidden p-6 rounded-lg bg-default',
                    'shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md'
                  )}
                >
                  {file && (
                    <figure className="relative mx-auto mb-6 size-72">
                      <Image
                        className="object-contain object-center"
                        src={file}
                        alt=""
                        fill
                        sizes="90vw"
                        unoptimized
                      />
                    </figure>
                  )}
                  <div className="overflow-hidden">
                    <textarea
                      className={twJoin(
                        'w-full resize-none border-x-0 border-t-0 border-primary/50',
                        'px-0 align-top tracking-wide sm:text-sm'
                      )}
                      rows={3}
                      placeholder={
                        'Describe las prendas de tu outfit. Ej: una camiseta blanca, ' +
                        'jeans y tenis negros'
                      }
                      value={description}
                      onInput={({ currentTarget: { value } }) => setDescription(value)}
                    />
                    <Button
                      className="mt-3 ml-auto py-1.5 text-sm disabled:bg-primary/50"
                      disabled={!description}
                      loading={isLoading}
                      onClick={generateOutfit}
                    >
                      Generar Outfit
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Modal user={email} outfit={outfit} setOutfit={setOutfit} />
    </>
  )
}
