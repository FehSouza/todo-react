import { Dispatch, MouseEvent } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RiMenuFoldLine } from 'react-icons/ri'
import { INITIAL_LIST, ListsProps } from '../../pages'
import { customStorage } from '../../utils/customStorage'
import { ItemListsContainer } from '../ItemListsContainer'
import { TasksProps } from '../TasksContainer'
import * as S from './styles'

type ListsContainerProps = {
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
  listSelected?: ListsProps
  setListSelected: Dispatch<React.SetStateAction<ListsProps>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  tasks?: TasksProps[]
  setTasks: Dispatch<React.SetStateAction<TasksProps[]>>
  setShowDetails: Dispatch<React.SetStateAction<boolean>>
  setClosing: Dispatch<React.SetStateAction<boolean>>
}

export const ListsContainer = ({
  lists,
  setLists,
  listSelected,
  setListSelected,
  showList,
  setShowList,
  setModalAddListOpen,
  tasks,
  setTasks,
  setShowDetails,
  setClosing,
}: ListsContainerProps) => {
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

  const handleDeleteList = (event: MouseEvent<HTMLButtonElement>, id: number, name: string) => {
    event.stopPropagation()

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
              showList={showList}
              deleteList={(event) => handleDeleteList(event, list.id, list.name)}
              tasks={tasks}
              setTasks={setTasks}
              setClosing={setClosing}
              setShowDetails={setShowDetails}
              
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
