import { Dispatch } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { ListsProps } from '../../pages'
import { InputAndButton } from '../InputAndButton'
import { ItemTasksContainer } from '../ItemTasksContainer'
import { WithoutItemTasksContainer } from '../WithoutItemTasksContainer'
import * as S from './styles'

type TasksContainerProps = {
  listSelected?: ListsProps
  lists: ListsProps[]
  setModalAddTaskOpen: Dispatch<React.SetStateAction<boolean>>
  tasks?: TasksProps[]
  showDetails: boolean
  setShowDetails: Dispatch<React.SetStateAction<boolean>>
  setClosing: Dispatch<React.SetStateAction<boolean>>
  taskSelected?: TasksProps
  setTaskSelected: Dispatch<React.SetStateAction<TasksProps | undefined>>
}

export interface TasksProps {
  task: string
  list: string
  id: number
  description: string
  date: Date
}

export const TasksContainer = ({
  listSelected,
  lists,
  setModalAddTaskOpen,
  tasks,
  showDetails,
  setShowDetails,
  setClosing,
  taskSelected,
  setTaskSelected,
}: TasksContainerProps) => {
  const newTasks = tasks?.filter((task) => {
    if (listSelected?.name === 'All') return true
    return listSelected?.name === task.list
  })

  const valueTitle = lists?.length === 0 ? 'Add a new task' : 'Select a list'

  const handleOpenModal = () => setModalAddTaskOpen(true)

  const handleShowDetails = (task: TasksProps) => {
    if (showDetails) {
      setClosing(true)
    } else {
      setTaskSelected(task)
      setShowDetails(true)
      setClosing(false)
    }
  }

  return (
    <S.Container>
      <S.Title>{listSelected?.name ?? valueTitle}</S.Title>

      <InputAndButton
        inputIconLeft={FiSearch}
        inputPlaceholder="Enter your search here…"
        buttonIconRight={AiOutlinePlus}
        color={listSelected?.color}
        size={1.125}
        onClickButton={handleOpenModal}
      />

      <S.TasksContent>
        {newTasks?.length === 0 && <WithoutItemTasksContainer />}

        {newTasks?.map((task) => (
          <ItemTasksContainer
            key={task.id}
            task={task.task}
            list={task.list}
            lists={lists}
            id={task.id}
            state={taskSelected?.id === task.id}
            showDetails={() => handleShowDetails(task)}
          />
        ))}
      </S.TasksContent>
    </S.Container>
  )
}
