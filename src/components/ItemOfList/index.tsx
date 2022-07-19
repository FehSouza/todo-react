import * as S from './styles'

type ItemOfListProps = {
  text: string
}

export const ItemOfList = ({ text }: ItemOfListProps) => {
  return (
    <S.Container>
      <S.Dot />
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
