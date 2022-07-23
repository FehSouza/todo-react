import * as S from './styles'

type ItemTasksContainerProps = {
  task: string
  nameList: string
}

export const ItemTasksContainer = ({ task, nameList }: ItemTasksContainerProps) => {
  return (
    <S.Container>
      <S.Dot />
      <S.Task>{task}</S.Task>
      <S.NameList>{nameList}</S.NameList>
    </S.Container>
  )
}
