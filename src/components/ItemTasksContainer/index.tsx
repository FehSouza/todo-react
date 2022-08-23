import { useToDo } from '../../context'
import * as S from './styles'

type ItemTasksContainerProps = {
  task: string
  list: string
  id: number
  showDetails: () => void
  state: boolean
}

export const ItemTasksContainer = ({ task, list, id, showDetails, state }: ItemTasksContainerProps) => {
  const { lists } = useToDo()

  const listStructure = lists.find((item) => list === item.name)

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => e.preventDefault()

  const onDragStart = (e: React.DragEvent<HTMLLIElement>, idTask: number) =>
    e.dataTransfer.setData('idTask', String(idTask))

  return (
    <S.Container
      draggable
      onDragOver={(e) => onDragOver(e)}
      onDragStart={(e) => onDragStart(e, id)}
      onClick={showDetails}
      state={state}
    >
      <S.Dot color={listStructure && listStructure.color} />
      <S.Task>{task}</S.Task>
      <S.NameList>{list}</S.NameList>
    </S.Container>
  )
}
