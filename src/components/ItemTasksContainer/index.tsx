import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type ItemTasksContainerProps = {
  task: string
  list: string
  lists: ListsProps[]
}

export const ItemTasksContainer = ({ task, list, lists }: ItemTasksContainerProps) => {
  const listStructure = lists.find((item) => list === item.name)

  return (
    <S.Container>
      <S.Dot color={listStructure && listStructure.color} />
      <S.Task>{task}</S.Task>
      <S.NameList>{list}</S.NameList>
    </S.Container>
  )
}
