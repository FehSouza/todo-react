import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type ItemTasksContainerProps = {
  task: string
  list: string
  listSelected?: ListsProps
}

export const ItemTasksContainer = ({ task, list, listSelected }: ItemTasksContainerProps) => {
  return (
    <S.Container>
      <S.Dot color={listSelected?.color} />
      <S.Task>{task}</S.Task>
      <S.NameList>{list}</S.NameList>
    </S.Container>
  )
}
