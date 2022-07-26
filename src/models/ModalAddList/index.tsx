import * as S from './styles'
import Modal from 'react-modal'

type ModalAddListProps = {
  isOpen: boolean
  onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

Modal.setAppElement('#root')

export const ModalAddList = ({ isOpen, onRequestClose }: ModalAddListProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="container-modal" className="content-modal">
      <span>TESTE</span>
    </Modal>
  )
}
