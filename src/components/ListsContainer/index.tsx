import { Dispatch, MouseEvent } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RiMenuFoldLine } from 'react-icons/ri'
import { INITIAL_LIST, ListsProps } from '../../pages'
import { customStorage } from '../../utils/customStorage'
import { ItemListsContainer } from '../ItemListsContainer'
import * as S from './styles'

type ListsContainerProps = {
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
  listSelected?: ListsProps
  setListSelected: Dispatch<React.SetStateAction<ListsProps>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ListsContainer = ({
  lists,
  setLists,
  listSelected,
  setListSelected,
  showList,
  setShowList,
  setModalAddListOpen,
}: ListsContainerProps) => {
  const handleToggleList = () => setShowList(!showList)

  const handleOpenModal = () => setModalAddListOpen(true)

  const handleDeleteList = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    event.stopPropagation()
    if (id === listSelected?.id) setListSelected(INITIAL_LIST)
    const newList = lists.filter((list) => list.id !== id)
    setLists(newList)
    customStorage.setItem('lists', newList)
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
              deleteList={(event) => handleDeleteList(event, list.id)}
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
