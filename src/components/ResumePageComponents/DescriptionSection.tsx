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

      <div className="title mb-2" style={{ whiteSpace: 'wrap' }}>
        擅長技術：NodeJS/Express、MySQL、React、JavaScript/TypeScript、HTML、CSS、Bootstrap、Git
      </div>

      <div className="title mb-2">最高學歷：國立臺灣大學土木系水利工程組碩士</div>

      <div className="title mb-2">
        工作簡歷：工業技術研究院綠能與環境研究所
      </div>
    </div>
  )
}

export default DescriptionSection
