import { IconType } from 'react-icons'
import { Color } from '../../styles/theme'
import * as S from './styles'

interface InputAndButtonProps {
  inputIconRight?: IconType
  inputIconLeft?: IconType
  inputPlaceholder?: string
  buttonIconRight?: IconType
  buttonIconLeft?: IconType
  buttonText?: string
  color?: Color
  size?: number
  marginTop?: number
}

export const InputAndButton = ({
  inputIconRight: InputIconRight,
  inputIconLeft: InputIconLeft,
  inputPlaceholder,
  buttonIconRight: ButtonIconRight,
  buttonIconLeft: ButtonIconLeft,
  buttonText,
  color,
  size,
  marginTop,
}: InputAndButtonProps) => {
  return (
    <S.Container marginTop={marginTop}>
      <S.InputWrapper color={color} size={size}>
        {InputIconLeft && <InputIconLeft />}

        <S.Input placeholder={inputPlaceholder}></S.Input>

        {InputIconRight && <InputIconRight />}
      </S.InputWrapper>

      <S.Button color={color} size={size}>
        {ButtonIconLeft && <ButtonIconLeft />}

        {buttonText}

        {ButtonIconRight && <ButtonIconRight />}
      </S.Button>
    </S.Container>
  )
}
