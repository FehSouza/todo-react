import { Dispatch, MouseEvent } from 'react'
import { ListsProps } from '../../pages'
import * as S from './styles'

interface DropdownModalAddTaskProps {
  lists: ListsProps[]
  setListSelectedNewTask: Dispatch<React.SetStateAction<ListsProps | undefined>>
  setErrorButton: Dispatch<React.SetStateAction<boolean>>
  handleToggleDropdown: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export const DropdownModalAddTask = ({
  lists,
  setListSelectedNewTask,
  setErrorButton,
  handleToggleDropdown,
}: DropdownModalAddTaskProps) => {
  const handleChooseList = (e: MouseEvent<HTMLDivElement>, list: ListsProps) => {
    setListSelectedNewTask(list)
    setErrorButton(false)
    handleToggleDropdown(e)
  }

  return (
    <S.Content>
      {lists.map((list) => (
        <S.ItemList key={list.id} onClick={(e) => handleChooseList(e, list)}>
          <S.NameList>{list.name}</S.NameList>
        </S.ItemList>
      ))}
    </S.Content>
  )
}
