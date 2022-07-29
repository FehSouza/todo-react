import { Dispatch, useEffect, useState } from 'react'
import { Color } from '../../styles/theme'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export interface ListsProps {
  name: string
  id: number
  color: Color
}

interface ToDoListContainerProps {
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
}

let MOCK_LISTS: ListsProps[] = [
  { name: 'All', id: 1, color: 'themeBlue' },
  { name: 'Food', id: 2, color: 'themePink' },
  { name: 'School', id: 3, color: 'themeYellow' },
  { name: 'Home', id: 4, color: 'themeGreen' },
]

export const ToDoListContainer = ({ setModalAddListOpen, showList, setShowList }: ToDoListContainerProps) => {
  const [lists, setLists] = useState<ListsProps[]>([{ name: 'All', id: 1, color: 'themeBlue' }])
  const [listSelected, setListSelected] = useState<ListsProps>({ name: 'All', id: 1, color: 'themeBlue' })

  useEffect(() => {
    setTimeout(setLists, 500, MOCK_LISTS)
  }, [])

  return (
    <S.Container>
      <ListsContainer
        lists={lists}
        listSelected={listSelected}
        setListSelected={setListSelected}
        showList={showList}
        setShowList={setShowList}
        setModalAddListOpen={setModalAddListOpen}
      />
      <TasksContainer listSelected={listSelected} lists={lists} />
    </S.Container>
  )
}
