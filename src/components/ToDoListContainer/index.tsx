import { Dispatch } from 'react'
import { ListsProps } from '../../pages'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

interface ToDoListContainerProps {
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
  listSelected: ListsProps
  setListSelected: Dispatch<React.SetStateAction<ListsProps>>
}

export const ToDoListContainer = ({
  setModalAddListOpen,
  showList,
  setShowList,
  lists,
  setLists,
  listSelected,
  setListSelected,
}: ToDoListContainerProps) => {
  return (
    <S.Container>
      <ListsContainer
        lists={lists}
        setLists={setLists}
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
