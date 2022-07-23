import { BsPlusLg } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import * as S from './styles'

export const SearchContainer = () => {
  return (
    <S.Container>
      <S.SearchWrapper>
        <FiSearch />
        <S.SearchInput placeholder="Digite sua pesquisa aqui…"></S.SearchInput>
      </S.SearchWrapper>
      
      <S.ButtonAdd>
        <BsPlusLg />
      </S.ButtonAdd>
    </S.Container>
  )
}
