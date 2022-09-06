import { useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import { ordination } from '../../utils/ordination'
import * as S from './styles'

export const Ordination = () => {
  const { lists, setLists, typeOrdination, setTypeOrdination } = useToDo()

  const toggleSwitch = () => {
    const paramOrdination = { listsToSort: lists, updateLists: setLists }

    if (typeOrdination === 'ASC') {
      setTypeOrdination('DESC')
      customStorage.setItem('typeOrdination', 'DESC')
      ordination.DESC(paramOrdination)
    } else {
      setTypeOrdination('ASC')
      customStorage.setItem('typeOrdination', 'ASC')
      ordination.ASC(paramOrdination)
    }
  }

  return (
    <S.Container>
      <S.OrdinationTitle>Sort lists:</S.OrdinationTitle>

      <S.OrdinationContent>
        <S.Option onClick={toggleSwitch}>A to Z</S.Option>

        <S.SwitchWrapper onClick={toggleSwitch}>
          <S.SwitchBox typeOrdination={typeOrdination}></S.SwitchBox>
        </S.SwitchWrapper>

        <S.Option onClick={toggleSwitch}>Z to A</S.Option>
      </S.OrdinationContent>
    </S.Container>
  )
}
