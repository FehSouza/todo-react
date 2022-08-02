import { ChangeEvent, Dispatch, Fragment, KeyboardEvent, useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { TbLetterT } from 'react-icons/tb'
import { InputAndButton } from '../../components'
import { ListsProps } from '../../pages'
import { Color } from '../../styles/theme'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

interface ModalAddListProps {
  isOpen: boolean
  showList: boolean
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
}

const MOCK_COLORS_THEME: Color[] = [
  'themeBlue',
  'themePurple',
  'themePink',
  'themeOrange',
  'themeYellow',
  'themeGreen',
  'themeRed',
]

export const ModalAddList = ({ isOpen, setModalAddListOpen, showList, lists, setLists }: ModalAddListProps) => {
  const [nameList, setNameList] = useState('')
  const [colorThemeSelected, setColorThemeSelected] = useState<Color>('themeBlue')
  const [errorInput, setErrorInput] = useState(false)

  const handleCloseModal = () => {
    setModalAddListOpen(false)
    setNameList('')
    setColorThemeSelected('themeBlue')
    setErrorInput(false)
  }

  const handleCloseModalEsc = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isOpen === true && event.key === 'Escape') handleCloseModal()
  }

  const handleTitleList = (e: ChangeEvent<HTMLInputElement>) => setNameList(e.target.value)

  const handleThemeColor = (color: Color) => setColorThemeSelected(color)

  const handleCreateList = () => {
    if (!nameList || nameList.length <= 3) {
      setErrorInput(true)
      return
    }

    const newList = [...lists, { name: nameList, id: Math.random() * 9, color: colorThemeSelected }]
    setErrorInput(false)
    setLists(newList)
    handleCloseModal()
    customStorage.setItem('lists', newList)
  }

  return (
    <Fragment>
      {isOpen && (
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
