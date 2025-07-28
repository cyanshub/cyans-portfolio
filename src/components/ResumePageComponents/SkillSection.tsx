import styled from 'styled-components'

// 為 Props 定義型別
type sp = {
  id: number
  title: string
  language: string
  linkGitHub: string
  linkWebAPIs: string
  websiteRender: string
  cover: string
  root?: string | undefined
  user1?: string | undefined
  password?: string | undefined
  userMe?: string | undefined
  projectType?: string | undefined
  note?: string | undefined
}

type Props = {
  sps: sp[]
}

const SkillSection = ({ sps }: Props) => {
  return (
    <div className="skill-section">
      {/* <!-- 作品描述 --> */}
      <div className="skill">
        <h3 className="skill-name">作品描述</h3>

        <p className="skill-description">
          目前，我在新創團隊擔任全端工程師，負責前後端開發。後端主要使用 Express 或 Django，前端則採用 Next.js。在工作中，同時參與前端與後端專案的開發與維護，具備完整的全端開發能力。
        </p>

        <p className="skill-description">
          我已將幾個過去比較主要的作品重新部署至 AWS EC2，並採用 Docker 進行容器化管理。這些專案透過 Nginx 進行反向代理，並自行申請 DNS 網域與 SSL 憑證，支援 HTTPS 安全連線，讓我對伺服器環境的運行與管理有更深入的掌握。歡迎參考介紹頁面並實際體驗看看！
        </p>

        <h3 className="skill-name">作品列表</h3>
        <ul>
          {sps.map((sp) => (
            <StyledA key={sp.id} href={sp.websiteRender} target="_blank" rel="noopener noreferrer">
              <li>{sp.title}</li>
            </StyledA>
          ))}
        </ul>
      </div>

      {/* 作品集: 將陣列資料迴圈出來 */}
      {sps.map((sp) => {
        return (
          <div key={sp.id} className="skill image-container mx-3" aria-label='點擊圖片可另開視窗前往網站' title="點擊圖片可另開視窗前往網站">
            <h3 className="skill-name">{sp.title}</h3>

            <div>
              {sp.linkGitHub && (
                <a className="link-formats" href={sp.linkGitHub} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github me-1"></i>
                  <span>前往介紹頁面 | </span>
                </a>
              )}
              {sp.projectType && (
                <span>
                  專案性質: 
                  {(sp.projectType === '個人專案' || sp.projectType === '工作專案') ? (
                    <strong>{sp.projectType}</strong>
                  ) : (
                    sp.projectType
                  )}
                </span>
              )}
            </div>

            <div className="mb-2">
              <a className="link-formats" href={sp.websiteRender} target="_blank" rel="noopener noreferrer">
                <span>前往網站</span>
              </a>
              <span> | {sp.language}</span>
            </div>

            <a className="link-formats" href={sp.websiteRender} target="_blank" rel="noopener noreferrer">
              <StyledImageContainer>
                <StyledImage src={sp.cover} alt={sp.title} />
              </StyledImageContainer>
            </a>

            {/* 測試帳號資訊 */}
            <StyledAccountContainer>
              <StyledAccountTitle>測試帳號</StyledAccountTitle>
              <StyledAccountList>
                {(() => {
                  if (sp.projectType === '工作專案') {
                    return (
                      <>
                        <StyledAccountItem>工作專案，無提供測試帳號</StyledAccountItem>
                        <StyledAccountItem>僅展示可公開之頁面內容</StyledAccountItem>
                        <StyledAccountItem>備註: {sp.note}</StyledAccountItem>
                      </>
                    )
                  }

                  if (sp.root) {
                    return (
                      <>
                        <StyledAccountItem>帳號: {sp.root}</StyledAccountItem>
                        <StyledAccountItem>帳號: {sp.user1}</StyledAccountItem>
                        <StyledAccountItem>密碼: {sp.password}</StyledAccountItem>
                      </>
                    )
                  } else if (sp.userMe) {
                    return (
                      <>
                        <StyledAccountItem>帳號: {sp.userMe}</StyledAccountItem>
                        <StyledAccountItem>密碼: {sp.password}</StyledAccountItem>
                      </>
                    )
                  } else {
                    return <StyledAccountItem>並未實作使用者驗證機制</StyledAccountItem>
                  }
                })()}
              </StyledAccountList>
            </StyledAccountContainer>
          </div>
        );
      })}
    </div>
  )
}

// UI 元件樣式
const StyledA = styled.a`
  text-decoration: none;
  color: var(--main-text-color);

  &:hover {
    color: var(--nav-link-color);
  }
`

// 新增圖片容器樣式
const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 80vh; /* 使用視窗高度的80%作為最大高度 */
  width: auto;
  height: auto;
  object-fit: contain; /* 確保圖片完整顯示 */
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  /* 桌面版樣式 */
  @media screen and (min-width: 768px) {
    max-width: 280px;
    max-height: 70vh;
  }

  /* 大螢幕樣式 */
  @media screen and (min-width: 1200px) {
    max-width: 320px;
    max-height: 65vh;
  }

  /* 超大螢幕樣式 */
  @media screen and (min-width: 1600px) {
    max-width: 350px;
    max-height: 60vh;
  }

  &:hover {
    transform: scale(1.02);
  }
`

const StyledAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 0.5rem 0;
  border-top: 1px solid var(--decoration-line-color);
`

const StyledAccountTitle = styled.h4`
  font-size: 1rem;
  color: var(--main-text-color);
  margin-bottom: 0.5rem;
`

const StyledAccountList = styled.ul`
  padding-left: 0;
  margin-left: 0;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledAccountItem = styled.li`
  font-size: 0.9rem;
  color: var(--main-text-color);
  margin-bottom: 0.25rem;
`

export default SkillSection
