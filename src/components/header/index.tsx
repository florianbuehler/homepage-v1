import React, { Component } from 'react'
import { Link } from 'react-scroll'
import HeaderNavToggle from './navToogle'
import DarkModeToggle from '../atoms/darkModeToggle'

// styles
import classes from './styles.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  open: boolean
}

class Header extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount(): void {
    document.body.classList.remove('has--nav-open')
  }

  componentDidUpdate(): void {
    if (this.state.open) {
      document.body.classList.add('has--nav-open')
    } else {
      document.body.classList.remove('has--nav-open')
    }
  }

  componentWillUnmount(): void {
    document.body.classList.remove('has--nav-open')
  }

  handleToggle = (): void => {
    this.setState({
      open: !this.state.open
    })
  }

  render(): React.ReactElement {
    return (
      <header className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <Link to="/">
              <h2>Florian</h2>
            </Link>
          </div>
          <div className={`${classes.navigation} ${this.state.open ? classes.navigationOpen : ''}`}>
            <nav>
              <Link to="about" spy={true} smooth={true} offset={0} duration={600}>
                About
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={0} duration={600}>
                Projects
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={0} duration={600}>
                Skills
              </Link>
              <DarkModeToggle />
            </nav>
          </div>
          <HeaderNavToggle open={this.state.open} handleToggle={(): void => this.handleToggle()} />
        </div>
      </header>
    )
  }
}

export default Header
