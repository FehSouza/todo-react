import { useToDo } from '../../context'
import { DetailsTask } from '../DetailsTask'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export const ToDoListContainer = () => {
  const { showDetails } = useToDo()

  return (
    <S.Container>
      <S.ToDoListContainer showDetails={showDetails}>
        <ListsContainer />
        <TasksContainer />
      </S.ToDoListContainer>

      {showDetails && <DetailsTask />}
    </S.Container>
  )
}
