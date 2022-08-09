import { Dispatch } from 'react'
import { ListsProps } from '../../pages'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer, TasksProps } from '../TasksContainer'
import * as S from './styles'

interface ToDoListContainerProps {
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  setModalAddTaskOpen: Dispatch<React.SetStateAction<boolean>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
  listSelected: ListsProps
  setListSelected: Dispatch<React.SetStateAction<ListsProps>>
  tasks?: TasksProps[]
}

export const ToDoListContainer = ({
  setModalAddListOpen,
  setModalAddTaskOpen,
  showList,
  setShowList,
  lists,
  setLists,
  listSelected,
  setListSelected,
  tasks,
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
      <TasksContainer
        listSelected={listSelected}
        lists={lists}
        setModalAddTaskOpen={setModalAddTaskOpen}
        tasks={tasks}
      />
    </S.Container>
  )
}
