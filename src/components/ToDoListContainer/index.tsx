import { Dispatch, useState } from 'react'
import { ListsProps } from '../../pages'
import { DetailsTask } from '../DetailsTask'
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
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
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
  setTasks,
}: ToDoListContainerProps) => {
  const [taskSelected, setTaskSelected] = useState<TasksProps>()
  const [closing, setClosing] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <S.Container>
      <S.ToDoListContainer showDetails={showDetails}>
        <ListsContainer
          lists={lists}
          setLists={setLists}
          listSelected={listSelected}
          setListSelected={setListSelected}
          showList={showList}
          setShowList={setShowList}
          setModalAddListOpen={setModalAddListOpen}
          tasks={tasks}
          setTasks={setTasks}
          setShowDetails={setShowDetails}
          setClosing={setClosing}
        />
        <TasksContainer
          listSelected={listSelected}
          lists={lists}
          setModalAddTaskOpen={setModalAddTaskOpen}
          tasks={tasks}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          setClosing={setClosing}
          taskSelected={taskSelected}
          setTaskSelected={setTaskSelected}
        />
      </S.ToDoListContainer>
      {showDetails && (
        <DetailsTask
          closing={closing}
          setClosing={setClosing}
          setShowDetails={setShowDetails}
          taskSelected={taskSelected}
        />
      )}
    </S.Container>
  )
}
