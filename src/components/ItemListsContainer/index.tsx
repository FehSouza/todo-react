import { Color } from '../../styles/theme'
import * as S from './styles'

type ItemListsContainerProps = {
  text: string
  color: Color
  state: boolean
  selectList: () => void
  showList: boolean
}

export const ItemListsContainer = ({ text, color, state, selectList, showList }: ItemListsContainerProps) => {
  return (
    <S.Container onClick={selectList} color={color} state={state}>
      <S.Dot />
      {showList && <S.NameList>{text}</S.NameList>}
    </S.Container>
  )
}
