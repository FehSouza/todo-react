import { ItemTasksContainer } from '../ItemTasksContainer'
import { SearchContainer } from '../SearchContainer'
import { ListProps } from '../ToDoListContainer'
import * as S from './styles'

type TasksContainerProps = {
  list: ListProps
}

export const TasksContainer = ({ list }: TasksContainerProps) => {
  return (
    <S.Container>
      <S.Title>{list.name}</S.Title>

      <SearchContainer />

      <S.TasksContent>
        <ItemTasksContainer task="Placeholder" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
        <ItemTasksContainer task="Teste" nameList="Work" />
      </S.TasksContent>
    </S.Container>
  )
}
