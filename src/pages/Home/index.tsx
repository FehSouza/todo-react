import { useEffect } from 'react'
import { ToDoListContainer } from '../../components'
import { TasksProps, useToDo } from '../../context'
import { ModalAddList, ModalAddTask, ModalDeleteList } from '../../models'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export const Home = () => {
  const { setLists, setTasks } = useToDo()

  useEffect(() => {
    const listsLocalStorage = customStorage.getItem('lists')
    const tasksLocalStorage = customStorage.getItem('tasks') as TasksProps[]
    if (listsLocalStorage) setLists(listsLocalStorage)
    if (tasksLocalStorage)
      setTasks(
        tasksLocalStorage.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      )
  }, [setLists, setTasks])

  return (
    <S.Container>
      <ToDoListContainer />
      <ModalAddList />
      <ModalAddTask />
      <ModalDeleteList />
    </S.Container>
  )
}
