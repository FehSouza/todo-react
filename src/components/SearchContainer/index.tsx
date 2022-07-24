import { BsPlusLg } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { ListsProps } from '../ToDoListContainer'
import * as S from './styles'

type SearchContainerProps = {
  listSelected: ListsProps
}

export const SearchContainer = ({ listSelected }: SearchContainerProps) => {
  return (
    <S.Container>
      <S.SearchWrapper>
        <FiSearch />
        <S.SearchInput placeholder="Digite sua pesquisa aqui…"></S.SearchInput>
      </S.SearchWrapper>

      <S.ButtonAdd color={listSelected.color}>
        <BsPlusLg />
      </S.ButtonAdd>
    </S.Container>
  )
}
