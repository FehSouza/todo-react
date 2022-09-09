import { useEffect } from 'react'
import { ToDoListContainer } from '../../components'
import { TasksProps, useToDo } from '../../context'
import { ModalAddList, ModalAddTask, ModalDeleteList, ModalUpdateList } from '../../models'
import { customStorage } from '../../utils/customStorage'
import { ordination } from '../../utils/ordination'
import * as S from './styles'

export const Home = () => {
  const { setLists, setTasks, setTypeOrdination } = useToDo()

  useEffect(() => {
    const listsLocalStorage = customStorage.getItem('lists')
    const tasksLocalStorage = customStorage.getItem('tasks') as TasksProps[]
    const typeOrdinationLocalStorage = customStorage.getItem('typeOrdination')

    if (listsLocalStorage) setLists(listsLocalStorage)

    if (tasksLocalStorage)
      setTasks(
        tasksLocalStorage.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      )

    if (typeOrdinationLocalStorage) {
      const paramOrdination = { listsToSort: listsLocalStorage, updateLists: setLists }
      typeOrdinationLocalStorage === 'ASC' ? ordination.ASC(paramOrdination) : ordination.DESC(paramOrdination)

      setTypeOrdination(typeOrdinationLocalStorage)
    }
  }, [setLists, setTasks, setTypeOrdination])

  return (
    <S.Container>
      <ToDoListContainer />
      <ModalAddList />
      <ModalAddTask />
      <ModalDeleteList />
      <ModalUpdateList />
    </S.Container>
  )
}
