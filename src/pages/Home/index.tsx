import { useEffect } from 'react'
import { ToDoListContainer } from '../../components'
import { useToDo } from '../../context'
import { ModalAddList, ModalAddTask } from '../../models'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export const Home = () => {
  const { setLists, setTasks } = useToDo()

  useEffect(() => {
    const listsLocalStorage = customStorage.getItem('lists')
    const tasksLocalStorage = customStorage.getItem('tasks')
    if (listsLocalStorage) setLists(listsLocalStorage)
    if (tasksLocalStorage) setTasks(tasksLocalStorage)
  }, [setLists, setTasks])

  return (
    <S.Container>
      <ToDoListContainer />
      <ModalAddList />
      <ModalAddTask />
    </S.Container>
  )
}
