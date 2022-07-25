import ImageTeste from '../../assets/no-tasks.svg'
import * as S from './styles'

export const WithoutItemTasksContainer = () => {
  return (
    <S.Container>
      <S.Text>Add a new task</S.Text>
      <S.Image
        src={ImageTeste}
        alt="A imagem consiste em um desenho, sendo que do lado direito há uma lista de três tarefas (a primeira marcada como feita, e as outras duas ainda para serem realizadas), e no canto esquerdo há uma mulher morena representada de perfil, de calça preta e camisa branca, segurando em uma das mãos um circulo com o fundo na cor azul, e no meio do círculo há o desenho de um check na cor branca."
      />
    </S.Container>
  )
}
