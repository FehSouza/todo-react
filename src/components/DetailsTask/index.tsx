import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai'
import { TasksProps, useToDo } from '../../context'
import { formatDate } from '../../utils/formatDate'
import * as S from './styles'

interface DetailsTaskProps {
  taskSelected?: TasksProps
}

export const DetailsTask = ({ taskSelected }: DetailsTaskProps) => {
  const { setShowDetails, closing, setClosing } = useToDo()

  const handleClose = () => {
    if (!closing) return
    setClosing(false)
    setShowDetails(false)
  }

  return (
    <S.Container closing={closing} onAnimationEnd={handleClose}>
      <S.TaskInfosWrapper>
        <S.Title>{taskSelected?.task}</S.Title>

        <S.DateWrapper>
          <AiOutlineCalendar />
          <S.Date>{formatDate(taskSelected?.date)}</S.Date>
        </S.DateWrapper>

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
