import { ChangeEvent, Fragment, KeyboardEvent, useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { TbLetterT } from 'react-icons/tb'
import { InputAndButton } from '../../components'
import { useToDo } from '../../context'
import { Color } from '../../styles/theme'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

const MOCK_COLORS_THEME: Color[] = [
  'themeBlue',
  'themePurple',
  'themePink',
  'themeOrange',
  'themeYellow',
  'themeGreen',
  'themeRed',
]

export const ModalAddList = () => {
  const { modalAddListOpen, setModalAddListOpen, lists, setLists, showList } = useToDo()
  const [nameList, setNameList] = useState('')
  const [colorThemeSelected, setColorThemeSelected] = useState<Color>('themeBlue')
  const [errorInput, setErrorInput] = useState(false)

  const handleCloseModal = () => {
    setModalAddListOpen(false)
    setNameList('')
    setColorThemeSelected('themeBlue')
    setErrorInput(false)
  }

  const handleCloseModalEsc = (e: KeyboardEvent<HTMLDivElement>) => {
    if (modalAddListOpen === true && e.key === 'Escape') handleCloseModal()
  }

  const handleTitleList = (e: ChangeEvent<HTMLInputElement>) => setNameList(e.target.value)

  const handleThemeColor = (color: Color) => setColorThemeSelected(color)

  const handleCreateList = () => {
    const checkNameListExists = lists.some((list) => list.name.toLowerCase() === nameList.toLowerCase())

    if (!nameList || nameList.length <= 3 || checkNameListExists) {
      setErrorInput(true)
      return
    }

    const newList = [...lists, { name: nameList, id: Math.random() * 9, color: colorThemeSelected }]

    const listAll = newList.filter((list) => list.name === 'All')
    const listWithoutAll = newList.filter((list) => list.name !== 'All')

    listWithoutAll.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      return 0
    })

    const orderedList = [...listAll, ...listWithoutAll]

    setErrorInput(false)
    setLists(orderedList)
    handleCloseModal()
    customStorage.setItem('lists', orderedList)
  }

  return (
    <Fragment>
      {modalAddListOpen && (
        <S.Modal onClick={handleCloseModal}>
          <S.Content
            showList={showList}
            tabIndex={0}
            onKeyDown={handleCloseModalEsc}
            onClick={(e) => e.stopPropagation()}
          >
            <S.Title>List title</S.Title>

            <InputAndButton
              inputIconLeft={TbLetterT}
              inputPlaceholder="Enter your title here..."
              color={'themeBlue'}
              buttonIconLeft={FiSave}
              marginTop={0.5}
              onClickButton={handleCreateList}
              onChangeInput={handleTitleList}
              errorInput={errorInput}
              valueInput={nameList}
            />

            <S.ThemesWrapper>
              {MOCK_COLORS_THEME.map((color) => (
                <S.Theme
                  key={color}
                  colorTheme={color}
                  colorThemeSelected={colorThemeSelected === color}
                  onClick={() => handleThemeColor(color)}
                >
                  <S.ThemeInternal colorTheme={color} />
                </S.Theme>
              ))}
            </S.ThemesWrapper>
          </S.Content>
        </S.Modal>
      )}
    </Fragment>
  )
}
