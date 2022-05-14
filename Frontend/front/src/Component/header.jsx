export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
           
  
  <div className="line"></div>
                <h1 class='lineUp'>
                  {props.data ? props.data.title : 'Loading'}
                  
                </h1>
                </div>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
               
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}
