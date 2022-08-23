import { useState } from 'react'
import { TasksProps, useToDo } from '../../context'
import { DetailsTask } from '../DetailsTask'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'

export const ToDoListContainer = () => {
  const [taskSelected, setTaskSelected] = useState<TasksProps>()
  const { showDetails } = useToDo()

  return (
    <S.Container>
      <S.ToDoListContainer showDetails={showDetails}>
        <ListsContainer />
        <TasksContainer taskSelected={taskSelected} setTaskSelected={setTaskSelected} />
      </S.ToDoListContainer>

      {showDetails && <DetailsTask taskSelected={taskSelected} />}
    </S.Container>
  )
}
