'use client'

import { Fragment, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'

import { Highlight, HighlightWrapper, IconButton, Input } from '@coelho-ui/react'

const colors = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'foreground'] as const
type Color = (typeof colors)[number]

export function HighlightExample() {
  const [search, setSearch] = useState<string>('')
  const [color, setColor] = useState<Color>('danger')
  const [searches, setSearches] = useState<{ text: string; wrapper: Color }[]>([{ text: 'lorem', wrapper: 'danger' }])

  function addSearch() {
    if (search) {
      setSearches(prev => {
        const index = prev.findIndex(({ text }) => text.toLowerCase() === search.toLowerCase())
        if (index !== -1) {
          prev[index].wrapper = color
          return prev
        }
        return [...prev, { text: search, wrapper: color }]
      })
      setSearch('')
    }
  }

  function removeSearch(search: string) {
    setSearches(prev => prev.filter(({ text }) => text.toLowerCase() !== search.toLowerCase()))
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Highlight</h1>
      <div className="flex gap-5">
        <Input
          label="search"
          value={search}
          placeholder="Type something to search..."
          endContent={<IconButton icon={<MdAdd />} ripple={{ color }} onClick={addSearch} />}
          classNames={{ wrapper: 'grow-[4]' }}
          onChange={setSearch}
        />
        <div>
          <label htmlFor="color-select" className="text-xs font-bold uppercase">
            Color
          </label>
          <select
            id="color-select"
            value={color}
            className="w-full cursor-pointer rounded-medium bg-primary-50 px-3 py-2 text-primary-700 outline-none"
            onChange={e => setColor(e.target.value as any)}
          >
            {colors.map(color => (
              <Fragment key={color}>
                <option>{color}</option>
              </Fragment>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {searches.map(({ text, wrapper }, i) => (
          <div key={i} className="flex w-fit items-center gap-2 rounded-medium bg-foreground p-2">
            <HighlightWrapper wrapper={wrapper}>{text}</HighlightWrapper>
            <IoMdCloseCircle size={20} className="cursor-pointer text-background" onClick={() => removeSearch(text)} />
          </div>
        ))}
      </div>
      <p className="mt-8 whitespace-pre-line">
        <Highlight search={searches} wrapper={color}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada consectetur purus. Pellentesque sed sagittis diam. Nullam vel hendrerit velit, id vulputate ipsum. Phasellus mollis eget ex id feugiat. Integer venenatis dapibus consectetur. Aenean nec malesuada ex, sit amet volutpat metus. Duis libero diam, ultricies non felis et, aliquet tristique lacus. Nullam imperdiet consequat velit, eu consectetur neque rhoncus vitae. Nunc at nisi et ligula maximus tincidunt sit amet ut enim. Aliquam erat volutpat. Nullam luctus, enim iaculis tempus gravida, magna erat viverra lectus, ut tincidunt nisi metus a lacus. Etiam sit amet felis ac sem euismod interdum. Nulla gravida elit quis tortor mattis, in aliquam neque eleifend.

            Cras malesuada elit quis faucibus pharetra. Donec pretium velit eu ipsum tristique, quis convallis sem porta. Praesent dui dui, interdum vitae molestie id, sagittis bibendum sem. Ut vitae pulvinar orci, accumsan sollicitudin lacus. Etiam eu lobortis lectus. Vivamus sodales lorem in mi mattis tincidunt. Nunc egestas mauris justo, gravida tincidunt enim vestibulum eu. Cras mollis eget sapien ut accumsan. Cras tristique mi risus, quis sodales ipsum posuere nec. Aliquam ut malesuada magna. Fusce libero lacus, pellentesque ac quam vel, facilisis vulputate mauris. Proin auctor purus at ornare bibendum. Duis sagittis tortor id nisi convallis vestibulum.

            Sed ante eros, dictum non dignissim a, aliquet a velit. Proin et libero iaculis, lacinia nisl sit amet, venenatis neque. Integer ultrices, lorem vel fringilla luctus, diam justo volutpat orci, sed interdum lacus nibh sed odio. Suspendisse eleifend semper vehicula. Nunc ut metus tempus, consequat diam ac, tempus erat. Ut interdum sit amet urna et blandit. Morbi turpis sapien, posuere et euismod eget, tincidunt faucibus dolor. Quisque pulvinar felis metus, in fermentum turpis semper sagittis. Phasellus tincidunt egestas interdum. Fusce in odio mi. Nullam ullamcorper neque vitae laoreet rhoncus. Etiam id dictum leo. Phasellus ac pulvinar odio.

            Ut malesuada vel lectus at imperdiet. Aenean quis tellus at metus pellentesque aliquam vitae vitae mi. Nunc hendrerit magna eget ipsum placerat, ut condimentum justo posuere. Aenean venenatis leo nec tortor cursus luctus. Nulla massa massa, pharetra ut arcu ac, faucibus venenatis tellus. Sed porta mattis eros nec interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            In laoreet lacus nec auctor scelerisque. Nulla suscipit odio et pretium suscipit. Cras convallis porta ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent massa nisi, facilisis tristique convallis sit amet, varius non leo. Suspendisse sit amet viverra nunc. Proin elementum sed nisl id eleifend. Vivamus dignissim eros dui, et convallis ipsum scelerisque nec. Phasellus semper mollis metus eu dignissim. Nunc a lacus sit amet metus euismod lobortis et quis augue. Integer et viverra sem. Donec eget mattis quam. Aliquam varius, diam non blandit euismod, dolor orci varius felis, vitae imperdiet libero massa at nulla. Aliquam a tristique ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean pretium ultrices arcu et egestas.`}
        </Highlight>
      </p>
    </div>
  )
}
