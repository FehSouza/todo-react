import { Fragment } from 'react'
import { useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export const ModalUpdateList = () => {
  const {
    modalUpdateList,
    setModalUpdateList,
    lists,
    taskSelected,
    setTaskSelected,
    tasks,
    setTasks,
    listSelected,
    setShowDetails,
  } = useToDo()

  const handleModalClose = () => setModalUpdateList(false)

  const handleClickContent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  const handleUpdateList = (name: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskSelected?.id) return { ...task, list: name }
      return task
    })

    if (taskSelected) setTaskSelected({ ...taskSelected, list: name })
    setTasks(newTasks)
    customStorage.setItem('tasks', newTasks)
    handleModalClose()

    if (name === listSelected.name || listSelected.name === 'All') return
    setShowDetails(false)
  }

  const newLists = lists.filter((list) => list.name !== taskSelected?.list)

  return (
    <Fragment>
      {modalUpdateList && (
        <S.Modal onClick={handleModalClose}>
          <S.Container onClick={(e) => handleClickContent(e)}>
            <S.Title>Select the new list</S.Title>

            <S.ListsWrapper>
              {newLists.map((list) => (
                <S.ListButton key={list.id} onClick={() => handleUpdateList(list.name)}>
                  {list.name}
                </S.ListButton>
              ))}
            </S.ListsWrapper>
          </S.Container>
        </S.Modal>
      )}
    </Fragment>
  )
}
