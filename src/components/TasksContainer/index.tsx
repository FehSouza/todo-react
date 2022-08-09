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
}

export interface TasksProps {
  task: string
  list: string
  id: number
  description: string
  date: Date
}

export const TasksContainer = ({ listSelected, lists, setModalAddTaskOpen, tasks }: TasksContainerProps) => {
  const newTasks = tasks?.filter((task) => {
    if (listSelected?.name === 'All') return true
    return listSelected?.name === task.list
  })

  const valueTitle = lists?.length === 0 ? 'Add a new task' : 'Select a list'

  const handleOpenModal = () => setModalAddTaskOpen(true)

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
          <ItemTasksContainer key={task.id} task={task.task} list={task.list} lists={lists} />
        ))}
      </S.TasksContent>
    </S.Container>
  )
}
