import { Dispatch } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { TasksProps, useToDo } from '../../context'
import { InputAndButton } from '../InputAndButton'
import { ItemTasksContainer } from '../ItemTasksContainer'
import { WithoutItemTasksContainer } from '../WithoutItemTasksContainer'
import * as S from './styles'

type TasksContainerProps = {
  taskSelected?: TasksProps
  setTaskSelected: Dispatch<React.SetStateAction<TasksProps | undefined>>
}

export const TasksContainer = ({ taskSelected, setTaskSelected }: TasksContainerProps) => {
  const { tasks, lists, listSelected, setModalAddTaskOpen, showDetails, setShowDetails, setClosing } = useToDo()

  const newTasks = tasks?.filter((task) => {
    if (listSelected?.name === 'All') return true
    return listSelected?.name === task.list
  })

  const valueTitle = lists?.length === 0 ? 'Add a new task' : 'Select a list'

  const handleOpenModal = () => setModalAddTaskOpen(true)

  const handleShowDetails = (task: TasksProps) => {
    if (showDetails && task !== taskSelected) {
      setClosing(true)

      setTimeout(() => {
        setTaskSelected(task)
        setShowDetails(true)
        setClosing(false)
      }, 350)
    } else if (showDetails) {
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
            id={task.id}
            state={taskSelected?.id === task.id}
            showDetails={() => handleShowDetails(task)}
          />
        ))}
      </S.TasksContent>
    </S.Container>
  )
}
