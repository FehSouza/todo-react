import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export const ToDoListContainer = () => {
  return (
    <S.Container>
      <ListsContainer />
      <TasksContainer />
    </S.Container>
  )
}
