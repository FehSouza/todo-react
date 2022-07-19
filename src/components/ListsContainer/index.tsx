import { BsPlusLg } from 'react-icons/bs'
import { ItemOfList } from '../ItemOfList'
import * as S from './styles'

export const ListsContainer = () => {
  return (
    <S.Container>
      <S.Title>Lists</S.Title>

      <S.ListOfLists>
        <ItemOfList text="All" />
      </S.ListOfLists>

      <S.ButtonAddList>
        <BsPlusLg />
        Add list
      </S.ButtonAddList>
    </S.Container>
  )
}
