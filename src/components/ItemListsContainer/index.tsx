import { MouseEventHandler } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useToDo } from '../../context'
import { Color } from '../../styles/theme'
import * as S from './styles'

type ItemListsContainerProps = {
  text: string
  color: Color
  fixed?: boolean
  state: boolean
  selectList: () => void
  deleteList: MouseEventHandler<HTMLButtonElement>
}

export const ItemListsContainer = ({ text, color, fixed, state, selectList, deleteList }: ItemListsContainerProps) => {
  const { tasks, setTasks, showList, setClosing, setShowDetails, setTaskSelected } = useToDo()

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => e.preventDefault()

  const onDrop = (e: React.DragEvent<HTMLLIElement>, listName: string) => {
    const idTask = Number(e.dataTransfer.getData('idTask'))

    const newTasks = tasks?.map((task) => {
      if (task.id === idTask) {
        return { ...task, list: listName }
      }
      return task
    })

    if (!newTasks) return

    setTasks(newTasks)
  }

  const handleCloseDetails = () => {
    setTaskSelected(undefined)
    selectList()
    setClosing(false)
    setShowDetails(false)
  }

  return (
    <S.Container
      showList={showList}
      onClick={handleCloseDetails}
      color={color}
      state={state}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, text)}
    >
      <S.Dot />
      {showList && <S.NameList>{text}</S.NameList>}

      {!fixed && showList && (
        <S.Delete onClick={deleteList} state={state} color={color}>
          <AiOutlineDelete />
        </S.Delete>
      )}
    </S.Container>
  )
}
