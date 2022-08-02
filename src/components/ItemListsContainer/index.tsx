import { MouseEventHandler } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { Color } from '../../styles/theme'
import * as S from './styles'

type ItemListsContainerProps = {
  text: string
  color: Color
  fixed?: boolean
  state: boolean
  selectList: () => void
  showList: boolean
  deleteList: MouseEventHandler<HTMLButtonElement>
}

export const ItemListsContainer = ({
  text,
  color,
  fixed,
  state,
  selectList,
  showList,
  deleteList,
}: ItemListsContainerProps) => {
  return (
    <S.Container showList={showList} onClick={selectList} color={color} state={state}>
      <S.Dot />
      {showList && <S.NameList>{text}</S.NameList>}

      {!fixed && showList && (
        <S.Delete onClick={deleteList} state={state} color={color}>
          <AiOutlineDelete />
        </S.Delete>
      )}
    </S.Container>
  )
}
