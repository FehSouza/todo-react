import { Dispatch } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RiMenuFoldLine } from 'react-icons/ri'
import { ItemListsContainer } from '../ItemListsContainer'
import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type ListsContainerProps = {
  lists: ListsProps[]
  listSelected?: ListsProps
  setListSelected: (list: ListsProps) => void
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ListsContainer = ({
  lists,
  listSelected,
  setListSelected,
  showList,
  setShowList,
  setModalAddListOpen,
}: ListsContainerProps) => {
  const handleToggleList = () => setShowList(!showList)

  const handleOpenModal = () => setModalAddListOpen(true)

  return (
    <S.Container showList={showList}>
      <S.ContainerTitle>
        <S.Title onClick={handleToggleList}>Lists</S.Title>
        <S.ButtonToggle onClick={handleToggleList}>{showList && <RiMenuFoldLine />}</S.ButtonToggle>
      </S.ContainerTitle>

      {lists.length !== 0 && (
        <S.ListsContent>
          {lists.map((list) => (
            <ItemListsContainer
              key={list.id}
              text={list.name}
              color={list.color}
              state={listSelected?.id === list.id}
              selectList={() => setListSelected(list)}
              showList={showList}
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
