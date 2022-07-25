import { useEffect, useState } from 'react'
import { Color } from '../../styles/theme'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export interface ListsProps {
  name: string
  id: number
  color: Color
}

let MOCK_LISTS: ListsProps[] = [
  { name: 'All', id: 1, color: 'themeBlue' },
  { name: 'Work', id: 2, color: 'themePurple' },
  { name: 'Food', id: 3, color: 'themePink' },
  { name: 'School', id: 4, color: 'themeOrange' },
  { name: 'All', id: 5, color: 'themeYellow' },
  { name: 'Home', id: 6, color: 'themeGreen' },
  { name: 'Food', id: 7, color: 'themeRed' },
  { name: 'School', id: 8, color: 'themeBlue' },
  { name: 'All', id: 9, color: 'themePurple' },
  { name: 'Home', id: 10, color: 'themePink' },
  { name: 'Food', id: 11, color: 'themeOrange' },
  { name: 'School', id: 12, color: 'themeYellow' },
  { name: 'All', id: 13, color: 'themeGreen' },
  { name: 'Home', id: 14, color: 'themeRed' },
  { name: 'Food', id: 15, color: 'themeBlue' },
  { name: 'School', id: 16, color: 'themePurple' },
]

export const ToDoListContainer = () => {
  const [lists, setLists] = useState<ListsProps[]>([{ name: 'All', id: 1, color: 'themeBlue' }])
  const [listSelected, setListSelected] = useState<ListsProps>({ name: 'All', id: 1, color: 'themeBlue' })

  useEffect(() => {
    setTimeout(setLists, 5000, MOCK_LISTS)
  }, [])

  return (
    <S.Container>
      <ListsContainer lists={lists} listSelected={listSelected} setListSelected={setListSelected} />
      <TasksContainer listSelected={listSelected} lists={lists} />
    </S.Container>
  )
}
