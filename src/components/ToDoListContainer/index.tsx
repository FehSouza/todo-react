import { useState } from 'react'
import { Color } from '../../styles/theme'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export interface ListProps {
  name: string
  id: number
  color: Color
}

let mock: ListProps[] = [
  { name: 'All', id: 1, color: 'themeBlue' },
  { name: 'Home', id: 2, color: 'themeGreen' },
  { name: 'Food', id: 3, color: 'themePink' },
  { name: 'School', id: 4, color: 'themeYellow' },
]

export const ToDoListContainer = () => {
  const [lists, setLists] = useState(mock)

  const [selected, setSelected] = useState(lists[0])

  return (
    <S.Container>
      <ListsContainer lists={lists} selected={selected} setSelected={setSelected} />
      <TasksContainer list={selected} />
    </S.Container>
  )
}
