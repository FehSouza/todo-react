import { Dispatch, SetStateAction, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Color } from '../../styles/theme'
import { ItemListsContainer } from '../ItemListsContainer'
import { ListProps } from '../ToDoListContainer'
import * as S from './styles'

type ListsContainerProps = {
  lists: ListProps[]
  selected: ListProps
  setSelected: (list: ListProps) => void
}

export const ListsContainer = ({ lists, selected, setSelected }: ListsContainerProps) => {
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
              state={selected.id === list.id}
              selectList={() => setSelected(list)}
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
