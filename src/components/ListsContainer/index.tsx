import { MouseEvent } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RiMenuFoldLine } from 'react-icons/ri'
import { INITIAL_LIST, useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import { ItemListsContainer } from '../ItemListsContainer'
import * as S from './styles'

export const ListsContainer = () => {
  const {
    tasks,
    setTasks,
    lists,
    setLists,
    showList,
    setShowList,
    listSelected,
    setListSelected,
    setModalAddListOpen,
  } = useToDo()

  const handleToggleList = () => setShowList(!showList)

  const handleOpenModal = () => setModalAddListOpen(true)

  const updateTasks = (nameList: string) => {
    if (!tasks) return

    const newTasks = tasks.map((task) => {
      if (task.list === nameList) {
        return { ...task, list: 'All' }
      }
      return task
    })

    setTasks(newTasks)
    customStorage.setItem('tasks', newTasks)
  }

  const handleDeleteList = (e: MouseEvent<HTMLButtonElement>, id: number, name: string) => {
    e.stopPropagation()

    if (id === listSelected?.id) setListSelected(INITIAL_LIST)

    const newLists = lists.filter((list) => list.id !== id)
    setLists(newLists)
    customStorage.setItem('lists', newLists)

    updateTasks(name)
  }

  return (
    <S.Container showList={showList}>
      <S.ContainerTitle onClick={handleToggleList}>
        <S.Title>Lists</S.Title>
        <S.ButtonToggle>{showList && <RiMenuFoldLine />}</S.ButtonToggle>
      </S.ContainerTitle>

      {lists.length !== 0 && (
        <S.ListsContent>
          {lists.map((list) => (
            <ItemListsContainer
              key={list.id}
              text={list.name}
              color={list.color}
              fixed={list.fixed}
              state={listSelected?.id === list.id}
              selectList={() => setListSelected(list)}
              deleteList={(e) => handleDeleteList(e, list.id, list.name)}
            />
          ))}
        </S.ListsContent>
      )}

      <S.ButtonAddList onClick={handleOpenModal}>
        <BsPlusLg />
        {showList && 'Add list'}
      </S.ButtonAddList>
    </S.Container>
  )
}
