import { useState } from 'react'
import { ToDoListContainer } from '../../components'
import { ModalAddList } from '../../models'
import * as S from './styles'

export const Home = () => {
  const [modalAddListOpen, setModalAddListOpen] = useState(false)
  const [showList, setShowList] = useState(true)

  return (
    <S.Container>
      <ToDoListContainer setModalAddListOpen={setModalAddListOpen} showList={showList} setShowList={setShowList} />
      <ModalAddList isOpen={modalAddListOpen} setModalAddListOpen={setModalAddListOpen} showList={showList} />
    </S.Container>
  )
}
