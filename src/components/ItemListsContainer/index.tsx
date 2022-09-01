import { MouseEventHandler } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
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
  fixedList: MouseEventHandler<HTMLButtonElement>
}

export const ItemListsContainer = ({
  text,
  color,
  fixed,
  state,
  selectList,
  deleteList,
  fixedList,
}: ItemListsContainerProps) => {
  const { tasks, setTasks, showList, setClosing, setShowDetails, setTaskSelected, setValueSearch } = useToDo()

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

  const handleToggleList = () => {
    setTaskSelected(undefined)
    selectList()
    setClosing(false)
    setShowDetails(false)
    setValueSearch('')
  }

  const iconFixed = !fixed ? <BsPinAngle /> : <BsPinAngleFill />

  return (
    <S.Container
      showList={showList}
      onClick={handleToggleList}
      color={color}
      state={state}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, text)}
      fixed={fixed}
    >
      <S.Dot />

      {showList && <S.NameList>{text}</S.NameList>}

      {!fixed && showList && (
        <S.Delete onClick={deleteList} state={state} color={color}>
          <AiOutlineDelete />
        </S.Delete>
      )}

      {text !== 'All' && showList && (
        <S.FixedButton onClick={fixedList} state={state} color={color} fixed={fixed}>
          {iconFixed}
        </S.FixedButton>
      )}
    </S.Container>
  )
}
