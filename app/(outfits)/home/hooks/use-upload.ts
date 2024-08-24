import { useEffect, useState, useTransition } from 'react'
import { useDropzone } from 'react-dropzone'
import { generateCustomOutfit } from '~/lib/actions'

export default function useUpload(gender: string) {
  const [file, setFile] = useState<string | null>(null)
  const [description, setDescription] = useState('')
  const [outfit, setOutfit] = useState<string>()
  const [isLoading, startTransition] = useTransition()
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    onDrop: ([file]) => setFile(URL.createObjectURL(file))
  })

  function generateOutfit() {
    startTransition(async () => {
      const url = await generateCustomOutfit(gender, description)
      
      setFile(null)
      setDescription('')
      setOutfit(url)
    })
  }

  useEffect(() => {
    if (file) return () => URL.revokeObjectURL(file)
  }, [file])

  return {
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
  }
}
