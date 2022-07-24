import { ItemTasksContainer } from '../ItemTasksContainer'
import { SearchContainer } from '../SearchContainer'
import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type TasksContainerProps = {
  listSelected: ListsProps
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
]

export const TasksContainer = ({ listSelected }: TasksContainerProps) => {
  return (
    <S.Container>
      <S.Title>{listSelected.name}</S.Title>

      <SearchContainer listSelected={listSelected} />

      <S.TasksContent>
        {MOCK_TASKS.map(
          (task) =>
            (listSelected.name === task.list && (
              <ItemTasksContainer key={task.id} task={task.task} list={task.list} listSelected={listSelected} />
            )) ||
            (listSelected.name === 'All' && (
              <ItemTasksContainer key={task.id} task={task.task} list={task.list} listSelected={listSelected} />
            ))
        )}
      </S.TasksContent>
    </S.Container>
  )
}
