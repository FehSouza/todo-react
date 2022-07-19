import { FiSearch } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'
import * as S from './styles'

export const TasksContainer = () => {
  return (
    <S.Container>
      <S.Title>All</S.Title>

      <S.SearchContainer>
        <S.SearchWrapper>
          <FiSearch />
          <S.SearchInput placeholder="Digite sua pesquisa aqui…"></S.SearchInput>
        </S.SearchWrapper>
        <S.ButtonAdd>
          <BsPlusLg />
        </S.ButtonAdd>
      </S.SearchContainer>

      <S.ListOfTasks>
        <S.ItemOfListWrapper>
          <S.Dots />
          <S.Task>Placeholder</S.Task>
          <S.NameList>Work</S.NameList>
        </S.ItemOfListWrapper>

        <S.ItemOfListWrapper>
          <S.Dots />
          <S.Task>Placeholder</S.Task>
          <S.NameList>Home</S.NameList>
        </S.ItemOfListWrapper>
      </S.ListOfTasks>
    </S.Container>
  )
}
