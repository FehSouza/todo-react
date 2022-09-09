import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai'
import { useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import { formatDate } from '../../utils/formatDate'
import * as S from './styles'

export const DetailsTask = () => {
  const {
    setShowDetails,
    closing,
    setClosing,
    tasks,
    setTasks,
    taskSelected,
    setTaskSelected,
    lists,
    setModalUpdateList,
  } = useToDo()

  const handleClose = () => {
    if (!closing) return
    setClosing(false)
    setShowDetails(false)
  }

  const handleToggleCompletedTask = () => {
    if (!taskSelected) return

    const toggleCompletedTask = {
      ...taskSelected,
      completed: !taskSelected.completed,
    }

    const newTasks = tasks.map((task) => {
      if (task.id !== taskSelected?.id) return task
      return toggleCompletedTask
    })

    setTaskSelected(toggleCompletedTask)
    setTasks(newTasks)
    customStorage.setItem('tasks', newTasks)
  }

  const handleDeleteTask = () => {
    if (!taskSelected) return

    const newTasks = tasks.filter((task) => taskSelected.id !== task.id)

    setTaskSelected(undefined)
    setTasks(newTasks)
    customStorage.setItem('tasks', newTasks)
    setClosing(true)
  }

  const textButtonState = taskSelected?.completed ? 'Undo' : 'Mischief managed'

  const [colorButtonList] = lists.filter((list) => list.name === taskSelected?.list)

  const handleOpenModal = () => setModalUpdateList(true)

  return (
    <S.Container closing={closing} onAnimationEnd={handleClose}>
      <S.TaskInfosWrapper>
        <S.Title>{taskSelected?.task}</S.Title>

        <S.DateWrapper>
          <AiOutlineCalendar />
          <S.Date>{formatDate(taskSelected?.date)}</S.Date>
        </S.DateWrapper>

        <S.DescriptionTitle>Description</S.DescriptionTitle>

        <S.Description>{taskSelected?.description}</S.Description>
      </S.TaskInfosWrapper>

      <S.ButtonsWrapper>
        <S.ButtonList onClick={handleOpenModal} color={colorButtonList?.color}>
          {taskSelected?.list}
        </S.ButtonList>

        <S.ButtonsWrapperInfo>
          <S.ButtonState onClick={handleToggleCompletedTask} completed={taskSelected?.completed}>
            {textButtonState}
          </S.ButtonState>

          <S.Delete onClick={handleDeleteTask}>
            <AiOutlineDelete />
          </S.Delete>
        </S.ButtonsWrapperInfo>
      </S.ButtonsWrapper>
    </S.Container>
  )
}
