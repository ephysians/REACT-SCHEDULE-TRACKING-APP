import PropTypes from 'prop-types'
import Button from './Button'



const Header = ( {title, onAdd, showAdd} ) => {
  return (
    <header className="header">
      <h1>{title= 'Ts-task'}</h1>
      <Button 
      color={showAdd ? 'red' :'green'}
      text= {showAdd ? 'Close': 'Add'} 
      onClick={onAdd} />  
    </header>
  )
}

/* From the above, on the button, the onclick is now tagged the onAdd f() that
 that triggers the 'showAdd'state in the App.js*/


Header.defaultProps= {title: 'Task Tracker'}

Header.propTypes = {title: PropTypes.string,}

export default Header
