import { Dispatch } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { TasksProps } from '../TasksContainer'
import * as S from './styles'

interface DetailsTaskProps {
  closing: boolean
  setClosing: Dispatch<React.SetStateAction<boolean>>
  setShowDetails: Dispatch<React.SetStateAction<boolean>>
  taskSelected?: TasksProps
}

export const DetailsTask = ({ closing, setClosing, setShowDetails, taskSelected }: DetailsTaskProps) => {
  const handleClose = () => {
    if (!closing) return
    setClosing(false)
    setShowDetails(false)
  }

    return (
    <S.Container closing={closing} onAnimationEnd={handleClose}>
      <S.TaskInfosWrapper>
        <S.Title>{taskSelected?.task}</S.Title>

        <S.Date>{String(taskSelected?.date)}</S.Date>

        <S.DescriptionTitle>Description</S.DescriptionTitle>

        <S.Description>{taskSelected?.description}</S.Description>
      </S.TaskInfosWrapper>

      <S.ButtonsWrapper>
        <S.ButtonState>Mischief managed</S.ButtonState>

        <S.Delete>
          <AiOutlineDelete />
        </S.Delete>
      </S.ButtonsWrapper>
    </S.Container>
  )
}
