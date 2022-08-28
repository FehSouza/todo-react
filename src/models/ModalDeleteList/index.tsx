import { Fragment } from 'react'
import { INITIAL_LIST, useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export const ModalDeleteList = () => {
  const {
    modalDeleteList,
    setModalDeleteList,
    infoDeleteList,
    listSelected,
    setListSelected,
    lists,
    setLists,
    tasks,
    setTasks,
    listHasTasks,
  } = useToDo()

  const handleModalClose = () => setModalDeleteList(false)

  const handleClickContent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  const updateTasks = (nameList: string, deleteTasks: boolean) => {
    if (!tasks) return

    let newTasks = []

    if (deleteTasks) {
      newTasks = tasks.filter((task) => task.list !== nameList)
    } else {
      newTasks = tasks.map((task) => {
        if (task.list === nameList) {
          return { ...task, list: 'All' }
        }
        return task
      })
    }

    setTasks(newTasks)
    customStorage.setItem('tasks', newTasks)
  }

  const handleDeleteList = (deleteTasks: boolean) => {
    if (infoDeleteList.id === listSelected?.id) setListSelected(INITIAL_LIST)

    const newLists = lists.filter((list) => list.id !== infoDeleteList.id)

    setLists(newLists)
    customStorage.setItem('lists', newLists)
    deleteTasks ? updateTasks(infoDeleteList.name, true) : updateTasks(infoDeleteList.name, false)
    handleModalClose()
  }

  return (
    <Fragment>
      {modalDeleteList && (
        <S.Modal onClick={handleModalClose}>
          <S.Container onClick={(e) => handleClickContent(e)} hasThreeButtons={listHasTasks}>
            {listHasTasks && (
              <S.OptionButton onClick={() => handleDeleteList(true)}>Delete tasks and the list</S.OptionButton>
            )}
            <S.OptionButton onClick={() => handleDeleteList(false)}>Delete the list</S.OptionButton>
            <S.OptionButton onClick={handleModalClose}>Cancel</S.OptionButton>
          </S.Container>
        </S.Modal>
      )}
    </Fragment>
  )
}
