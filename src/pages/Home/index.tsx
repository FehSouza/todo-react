import { useEffect, useState } from 'react'
import { ToDoListContainer } from '../../components'
import { ModalAddList } from '../../models'
import { Color } from '../../styles/theme'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export interface ListsProps {
  name: string
  id: number
  color: Color
  fixed?: boolean
}

export const INITIAL_LIST: ListsProps = { name: 'All', id: 1, color: 'themeBlue', fixed: true }

export const Home = () => {
  const [lists, setLists] = useState<ListsProps[]>([INITIAL_LIST])
  const [showList, setShowList] = useState(true)
  const [modalAddListOpen, setModalAddListOpen] = useState(false)
  const [listSelected, setListSelected] = useState<ListsProps>(INITIAL_LIST)

  useEffect(() => {
    const listsLocalStorage = customStorage.getItem('lists')
    if (listsLocalStorage) setLists(listsLocalStorage)
  }, [])

  return (
    <S.Container>
      <ToDoListContainer
        setModalAddListOpen={setModalAddListOpen}
        showList={showList}
        setShowList={setShowList}
        lists={lists}
        setLists={setLists}
        listSelected={listSelected}
        setListSelected={setListSelected}
      />

      <ModalAddList
        isOpen={modalAddListOpen}
        setModalAddListOpen={setModalAddListOpen}
        showList={showList}
        lists={lists}
        setLists={setLists}
      />
    </S.Container>
  )
}
