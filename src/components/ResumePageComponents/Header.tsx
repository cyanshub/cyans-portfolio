import styled from 'styled-components'

// 若有傳入 props 參數, 則需先定義 props 參數的類型
type Props = {
  // 定義回調函數的類型
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// UI元件
// 為組件定義類型
const Header = ({ onChange }: Props) => {
  return (
    <header>
      <nav>
        <a className="link-formats" href="#">
          <span className="nav-title">Cyan's Works</span>
        </a>
        <div className="nav-group">
          <label htmlFor="nav-darkmode-toggle" className="nav-icon">
            <StyledSpan>
              <i className="fa fa-moon me-1"></i>
              深色模式
            </StyledSpan>
          </label>
          <input type="checkbox" id="nav-darkmode-toggle" onChange={(event) => onChange?.(event)} />
        </div>
      </nav>
    </header>
  )
}

// UI元件樣式
const StyledSpan = styled.span`
  white-space: nowrap;
`

export default Header
