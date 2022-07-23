import { useState } from 'react'
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
  { name: 'Home', id: 2, color: 'themeGreen' },
  { name: 'Food', id: 3, color: 'themePink' },
  { name: 'School', id: 4, color: 'themeYellow' },
]

export const ToDoListContainer = () => {
  const [lists, setLists] = useState(MOCK_LISTS)
  const [listSelected, setListSelected] = useState(lists[0])

  return (
    <S.Container>
      <ListsContainer lists={lists} listSelected={listSelected} setListSelected={setListSelected} />
      <TasksContainer listSelected={listSelected} />
    </S.Container>
  )
}
