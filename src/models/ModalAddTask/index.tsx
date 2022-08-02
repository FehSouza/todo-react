import { Dispatch, Fragment } from 'react'
import { BsPencil } from 'react-icons/bs'
import { InputAndButton } from '../../components'
import * as S from './styles'

interface ModalAddTaskProps {
  isOpen: boolean
  setModalAddTaskOpen: Dispatch<React.SetStateAction<boolean>>
  showList: boolean
}

export const ModalAddTask = ({ isOpen, setModalAddTaskOpen, showList }: ModalAddTaskProps) => {
  const handleModalClose = () => setModalAddTaskOpen(false)

  return (
    <Fragment>
      {isOpen && (
        <S.Modal onClick={handleModalClose}>
          <S.Content showList={showList} onClick={(e) => e.stopPropagation()}>
            <InputAndButton
              inputIconLeft={BsPencil}
              inputPlaceholder="Title"
              buttonText="Select list"
              size={1.25}
              marginTop={0}
              color={'themeBlue'}
            />
          </S.Content>
        </S.Modal>
      )}
    </Fragment>
  )
}
