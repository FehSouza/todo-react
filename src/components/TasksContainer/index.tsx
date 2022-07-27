import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { InputAndButton } from '../InputAndButton'
import { ItemTasksContainer } from '../ItemTasksContainer'
import { ListsProps } from '../ToDoListContainer'
import { WithoutItemTasksContainer } from '../WithoutItemTasksContainer'
import * as S from './styles'

type TasksContainerProps = {
  listSelected?: ListsProps
  lists?: ListsProps[]
}

interface TasksProps {
  task: string
  list: string
  id: number
}

const MOCK_TASKS: TasksProps[] = [
  { task: 'Placeholder', list: 'Food', id: 1 },
  { task: 'Teste', list: 'Home', id: 2 },
  { task: 'Book', list: 'School', id: 3 },
  { task: 'Teste 2', list: 'Home', id: 4 },
  { task: 'Placeholder 2', list: 'School', id: 5 },
  { task: 'Comida', list: 'Food', id: 6 },
  { task: 'Placeholder 3', list: 'Food', id: 7 },
  { task: 'Placeholder', list: 'Food', id: 8 },
  { task: 'Teste', list: 'Home', id: 9 },
  { task: 'Book', list: 'School', id: 10 },
  { task: 'Teste 2', list: 'Home', id: 11 },
  { task: 'Placeholder 2', list: 'School', id: 12 },
  { task: 'Comida', list: 'Food', id: 13 },
  { task: 'Placeholder 3', list: 'Food', id: 14 },
]

export const TasksContainer = ({ listSelected, lists }: TasksContainerProps) => {
  const tasks = MOCK_TASKS.filter((task) => {
    if (listSelected?.name === 'All') return true
    return listSelected?.name === task.list
  })

  const valueTitle = lists?.length === 0 ? 'Add a new task' : 'Select a list'

  return (
    <S.Container>
      <S.Title>{listSelected?.name ?? valueTitle}</S.Title>

      <InputAndButton
        inputIconLeft={FiSearch}
        inputPlaceholder="Enter your search here…"
        buttonIconRight={AiOutlinePlus}
        color={listSelected?.color}
        size={1.125}
      />

      <S.TasksContent>
        {tasks.length === 0 && <WithoutItemTasksContainer />}

        {tasks.map((task) => (
          <ItemTasksContainer key={task.id} task={task.task} list={task.list} listSelected={listSelected} />
        ))}
      </S.TasksContent>
    </S.Container>
  )
}
