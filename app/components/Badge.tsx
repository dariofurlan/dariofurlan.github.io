export default function Badge() {
    return <div className='bestr-container'>
        <style scoped>
            {`
.bestr-container {
  display: block;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #e1e8ed;
  border-radius: 0.42857em;
  width: 560px;
  height: 125px;
  overflow: hidden;
}
.bestr-badge_imageUrl {
  display: block;
  float: left;
  background: #e1e8ed;
}
.bestr-badge_imageUrl_svg {
  width: 125px;
  height: 125px;
}
.bestr-description {
  display: block;
  background: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.3em;
  padding: 0.75em;
  overflow: hidden;
}
.bestr-badge_name {
  display: block;
  font-size: 1em;
  font-weight: bold;
  max-height: 1.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bestr-badge_obidescription {
  display: block;
  max-height: 3.9em;
}
.bestr-link {
  display: block;
  max-height: 1.3em;
}
`}
        </style>
        <div className='bestr-badge_imageUrl'>
            <a style={{ textDecoration: 'none', boxShadow: 'none', border: 'none' }} target='_blank' href='https://bestr.it/award/show/vA1gC2SBTry9qPftY5G5tg?ln=it'>
                <img style={{ margin: '0px', padding: '0px', border: '0px' }} className='bestr-badge_imageUrl_svg' src='https://bestr.it/filemanager/show/f1ae3fbe-75db-4b55-9a70-7ba61ae89b86.png' alt='Bestr Badge' />
            </a>
        </div>
        <div className='bestr-description'>
            <div className='bestr-badge_name'>
                <a style={{ textDecoration: 'none', color: '#292F33', boxShadow: 'none', border: 'none' }} target='_blank' href='https://bestr.it/award/show/vA1gC2SBTry9qPftY5G5tg?ln=it'>Laurea in Informatica</a>
            </div>
            <div className='bestr-badge_obidescription'>
                <a style={{ textDecoration: 'none', color: '#292F33', boxShadow: 'none', border: 'none' }} target='_blank' href='https://bestr.it/award/show/vA1gC2SBTry9qPftY5G5tg?ln=it'>Il o la titolare di questo Badge ha conseguito la Laurea in Informatica presso l'Università degli Studi di Padova.  Il corso di Laurea in Informatica fornisce una solida base cult...</a>
            </div>
            <div className='bestr-link'>
                <a style={{ textDecoration: 'none', color: '#8899A6', boxShadow: 'none', border: 'none' }} target='_blank' href='https://bestr.it/award/show/vA1gC2SBTry9qPftY5G5tg?ln=it'>bestr.it</a>
            </div>
        </div>
    </div>
}