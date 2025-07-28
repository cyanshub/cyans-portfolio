import styled from 'styled-components'

const DescriptionSection = () => {
  return (
    <div className="description-section">
      {/* <h3 className="description-tittle pt-3">簡歷</h3> */}

      {/* 聯絡方式 */}
      <div className="social-media mb-2">
        <a href="mailto:travel15740@gmail.com" className="social-media-link" target="_blank" rel="noopenner noreferrer">
          <i className="fas fa-envelope fa-lg"></i> Mail me
        </a>
        <span className="social-media-link"> | </span>
        <span className="social-media-link cursor-pointer">Cel. 0922-462897</span>
      </div>

      <div className="title mb-2">
        擅長技術：NodeJS/Express、Django/Python、React/NextJS、Vue、MySQL、PgAdmin、AWS EC2、Docker、Nginx、JavaScript/TypeScript
      </div>

      <StyledNoWrapTitle className="title mb-2">
        工作經歷 1：全端工程師 | Eslitec 以力科技
      </StyledNoWrapTitle>
      <StyledNoWrapTitle className="title mb-2">
        工作經歷 2：研發工程師 | 工研院綠能所
      </StyledNoWrapTitle>
      <StyledNoWrapTitle className="title mb-2">最高學歷：國立臺灣大學土木工程研究所</StyledNoWrapTitle>
    </div>
  )
}

// 強制不換行的樣式
const StyledNoWrapTitle = styled.div`
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default DescriptionSection
