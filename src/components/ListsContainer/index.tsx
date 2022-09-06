import { MouseEvent } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RiMenuFoldLine } from 'react-icons/ri'
import { useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import { ordination } from '../../utils/ordination'
import { ItemListsContainer } from '../ItemListsContainer'
import * as S from './styles'

export const ListsContainer = () => {
  const {
    lists,
    setLists,
    showList,
    setShowList,
    listSelected,
    setListSelected,
    setModalAddListOpen,
    setModalDeleteList,
    setInfoDeleteList,
    tasks,
    setListHasTasks,
    typeOrdination,
    setTypeOrdination,
  } = useToDo()

  const handleToggleList = () => setShowList(!showList)

  const handleOpenModal = () => setModalAddListOpen(true)

  const handleDeleteList = (e: MouseEvent<HTMLButtonElement>, id: number, name: string) => {
    e.stopPropagation()

    setModalDeleteList(true)
    setInfoDeleteList({ id: id, name: name })

    const listHasTasks = tasks.some((task) => task.list === name)
    setListHasTasks(listHasTasks)
  }

  const handleFixedList = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation()

    const newList = lists.map((list) => {
      if (list.id === id) return { ...list, fixed: !list.fixed }
      return list
    })

    const paramOrdination = { listsToSort: newList, updateLists: setLists }
    typeOrdination === 'ASC' ? ordination.ASC(paramOrdination) : ordination.DESC(paramOrdination)
  }

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
    <S.Container showList={showList}>
      <S.ContainerTitle onClick={handleToggleList}>
        <S.Title>Lists</S.Title>
        <S.ButtonToggle>{showList && <RiMenuFoldLine />}</S.ButtonToggle>
      </S.ContainerTitle>

      {lists.length !== 0 && (
        <S.ListsContent>
          {lists.map((list) => (
            <ItemListsContainer
              key={list.id}
              text={list.name}
              color={list.color}
              fixed={list.fixed}
              state={listSelected?.id === list.id}
              selectList={() => setListSelected(list)}
              deleteList={(e) => handleDeleteList(e, list.id, list.name)}
              fixedList={(e) => handleFixedList(e, list.id)}
            />
          ))}
        </S.ListsContent>
      )}

      {showList && (
        <S.OrdinationWrapper>
          <S.OrdinationTitle>Sort lists:</S.OrdinationTitle>

          <S.OrdinationContent>
            <S.Option onClick={toggleSwitch}>A to Z</S.Option>

            <S.SwitchWrapper onClick={toggleSwitch}>
              <S.SwitchBox typeOrdination={typeOrdination}></S.SwitchBox>
            </S.SwitchWrapper>

            <S.Option onClick={toggleSwitch}>Z to A</S.Option>
          </S.OrdinationContent>
        </S.OrdinationWrapper>
      )}

      <S.ButtonAddList onClick={handleOpenModal}>
        <BsPlusLg />
        {showList && 'Add list'}
      </S.ButtonAddList>
    </S.Container>
  )
}
