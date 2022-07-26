import { Dispatch, useEffect, useState } from 'react'
import { Color } from '../../styles/theme'
import { ListsContainer } from '../ListsContainer'
import { TasksContainer } from '../TasksContainer'
import * as S from './styles'
import { ModalAddList } from '../../models/ModalAddList/index'

export interface ListsProps {
  name: string
  id: number
  color: Color
}

let MOCK_LISTS: ListsProps[] = [{ name: 'All', id: 1, color: 'themeBlue' }]

export const ToDoListContainer = () => {
  const [lists, setLists] = useState<ListsProps[]>([{ name: 'All', id: 1, color: 'themeBlue' }])
  const [listSelected, setListSelected] = useState<ListsProps>({ name: 'All', id: 1, color: 'themeBlue' })
  const [modalAddListIsOpen, setModalAddListIsOpen] = useState(false)

  const handleModalOpen = (setStateModal: Dispatch<React.SetStateAction<boolean>>) => setStateModal(true)
  const handleModalClose = (setStateModal: Dispatch<React.SetStateAction<boolean>>) => setStateModal(false)

  useEffect(() => {
    setTimeout(setLists, 500, MOCK_LISTS)
  }, [])

  return (
    <S.Container>
      <ListsContainer
        lists={lists}
        listSelected={listSelected}
        setListSelected={setListSelected}
        setModalAddListIsOpen={() => handleModalOpen(setModalAddListIsOpen)}
      />
      <TasksContainer listSelected={listSelected} lists={lists} />
      <ModalAddList isOpen={modalAddListIsOpen} onRequestClose={() => handleModalClose(setModalAddListIsOpen)}/>
    </S.Container>
  )
}
