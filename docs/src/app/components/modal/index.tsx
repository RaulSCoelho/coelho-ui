'use client'

import { useState } from 'react'

import { Button, Modal, Option, Select } from '@coelho-ui/react'

const sizeOptions = ['md', 'sm', 'lg', 'full', 'xl', '2xl', 'xs', '3xl', '4xl', '5xl'] as const
const backdropOptions = ['blur', 'opaque', 'transparent'] as const
const scrollOptions = ['normal', 'inside', 'outside'] as const
const roundedOptions = ['md', 'sm', 'lg', 'none', 'full'] as const
const shadowOptions = ['md', 'sm', 'lg'] as const
const colorOptions = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const

interface Config {
  open: boolean
  size?: (typeof sizeOptions)[number]
  backdrop?: (typeof backdropOptions)[number]
  scroll?: (typeof scrollOptions)[number]
  rounded?: (typeof roundedOptions)[number]
  shadow?: (typeof shadowOptions)[number]
  color?: (typeof colorOptions)[number]
}

export function ModalExample() {
  const [modalProps, setModalProps] = useState<Config>({
    open: false
  })

  function handleModalProps(key: keyof Config, value: Config[keyof Config]) {
    setModalProps(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSelectChange = (key: keyof Config) => (option?: Option) => {
    handleModalProps(key, option?.value as any)
  }

  function openModal() {
    handleModalProps('open', true)
  }

  function closeModal() {
    handleModalProps('open', false)
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Modals</h1>
      <div className="space-y-4 text-center">
        <div className="flex justify-center gap-4">
          <Select
            label="size"
            value={modalProps.size}
            options={getSelectOptions(sizeOptions)}
            onChange={handleSelectChange('size')}
          />
          <Select
            label="backdrop"
            value={modalProps.backdrop}
            options={getSelectOptions(backdropOptions)}
            onChange={handleSelectChange('backdrop')}
          />
          <Select
            label="scroll"
            value={modalProps.scroll}
            options={getSelectOptions(scrollOptions)}
            onChange={handleSelectChange('scroll')}
          />
          <Select
            label="rounded"
            value={modalProps.rounded}
            options={getSelectOptions(roundedOptions)}
            onChange={handleSelectChange('rounded')}
          />
          <Select
            label="shadow"
            value={modalProps.shadow}
            options={getSelectOptions(shadowOptions)}
            onChange={handleSelectChange('shadow')}
          />
          <Select
            label="color"
            value={modalProps.color}
            options={getSelectOptions(colorOptions)}
            onChange={handleSelectChange('color')}
          />
        </div>
        <Button onClick={openModal} color={modalProps.color || undefined}>
          Open Modal
        </Button>
      </div>
      <Modal onClose={closeModal} {...modalProps}>
        <Modal.Header>Modal title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
          Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
          do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
          et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
          risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna
          exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
          sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
          mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
          nostrud ad veniam. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem
          aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
          proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus,
          sed porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
          enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
          quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
          dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.
          Culpa deserunt nostrud ad veniam. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
          eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus,
          sed porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
          enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" variant="text" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={closeModal}>Action</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function getSelectOptions(arr: any) {
  return arr.map((item: any) => ({ value: item, label: item }))
}
