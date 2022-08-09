import { ChangeEvent, MouseEvent } from 'react'
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
  onClickButton?: (e: MouseEvent<HTMLButtonElement>) => void
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
  errorInput?: boolean
  errorButton?: boolean
  valueInput?: string
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
  onClickButton,
  onChangeInput,
  errorInput,
  errorButton,
  valueInput,
}: InputAndButtonProps) => {
  return (
    <S.Container marginTop={marginTop}>
      <S.InputWrapper color={color} size={size} error={errorInput}>
        {InputIconLeft && <InputIconLeft />}

        <S.Input placeholder={inputPlaceholder} onChange={onChangeInput} value={valueInput} />

        {InputIconRight && <InputIconRight />}
      </S.InputWrapper>

      <S.Button color={color} size={size} onClick={onClickButton} errorButton={errorButton}>
        {ButtonIconLeft && <ButtonIconLeft />}

        {buttonText}

        {ButtonIconRight && <ButtonIconRight />}
      </S.Button>
    </S.Container>
  )
}
