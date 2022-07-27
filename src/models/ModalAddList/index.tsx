import { Dispatch } from 'react'
import { FiSave } from 'react-icons/fi'
import { TbLetterT } from 'react-icons/tb'
import { InputAndButton } from '../../components'
import * as S from './styles'

interface ModalAddListProps {
  isOpen: boolean
  showList: boolean
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ModalAddList = ({ isOpen, setModalAddListOpen, showList }: ModalAddListProps) => {
  const handleCloseModal = () => setModalAddListOpen(false)

  return (
    <S.Modal isOpen={isOpen} onClick={handleCloseModal}>
      <S.Content showList={showList} onClick={(e) => e.stopPropagation()}>
        <S.Title>List title</S.Title>

        <InputAndButton
          inputIconLeft={TbLetterT}
          inputPlaceholder="Enter your title here..."
          color={'themeBlue'}
          buttonIconLeft={FiSave}
        />

        <S.ThemesWrapper>
          <S.Theme></S.Theme>
        </S.ThemesWrapper>
      </S.Content>
    </S.Modal>
  )
}
