import { useState } from 'react'
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
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
    setModalUpdateList,
    lists,
  } = useToDo()

  const [showDropdown, setShowDropdown] = useState(false)

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

  const handleOpenModal = () => setModalUpdateList(true)

  const handleShowDropdown = () => setShowDropdown(true)
  const handleHideDropdown = () => setShowDropdown(false)

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
        <S.ButtonState onClick={handleToggleCompletedTask} completed={taskSelected?.completed}>
          {textButtonState}
        </S.ButtonState>

        <S.Delete onClick={handleDeleteTask}>
          <AiOutlineDelete />
        </S.Delete>
      </S.ButtonsWrapper>

      <S.ButtonClose onClick={() => setClosing(true)}>
        <RiCloseFill />
      </S.ButtonClose>

      {lists.length > 1 && (
        <S.ButtonTools onMouseMove={handleShowDropdown} onMouseOut={handleHideDropdown}>
          <FaTools />
        </S.ButtonTools>
      )}

      <S.ContainerTools showDropdown={showDropdown} onMouseMove={handleShowDropdown} onMouseOut={handleHideDropdown}>
        <S.ContentTools>
          <S.ButtonOption onClick={handleOpenModal}>Update the list</S.ButtonOption>
        </S.ContentTools>
      </S.ContainerTools>
    </S.Container>
  )
}
