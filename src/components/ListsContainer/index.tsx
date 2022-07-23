import { BsPlusLg } from 'react-icons/bs'
import { ItemListsContainer } from '../ItemListsContainer'
import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type ListsContainerProps = {
  lists: ListsProps[]
  listSelected: ListsProps
  setListSelected: (list: ListsProps) => void
}

export const ListsContainer = ({ lists, listSelected, setListSelected }: ListsContainerProps) => {
  return (
    <S.Container>
      <S.Title>Lists</S.Title>

      <S.ListsContent>
        {lists.map((list) => {
          return (
            <ItemListsContainer
              key={list.id}
              text={list.name}
              color={list.color}
              state={listSelected.id === list.id}
              selectList={() => setListSelected(list)}
            />
          )
        })}
      </S.ListsContent>

      <S.ButtonAddList>
        <BsPlusLg />
        Add list
      </S.ButtonAddList>
    </S.Container>
  )
}
