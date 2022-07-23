import { ItemTasksContainer } from '../ItemTasksContainer'
import { SearchContainer } from '../SearchContainer'
import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type TasksContainerProps = {
  listSelected: ListsProps
}

export const TasksContainer = ({ listSelected }: TasksContainerProps) => {
  return (
    <S.Container>
      <S.Title>{listSelected.name}</S.Title>

      <SearchContainer />

      <S.TasksContent>
        <ItemTasksContainer task="Placeholder" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Placeholder" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
      </S.TasksContent>
    </S.Container>
  )
}
