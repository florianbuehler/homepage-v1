import React, { Component } from 'react'
import { Link } from 'gatsby'
import HeaderNavToggle from './navToogle'

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
              <h2>Zhou Yuerong | 周樾融</h2>
            </Link>
          </div>
          <div className={`${classes.navigation} ${this.state.open ? classes.navigationOpen : ''}`}>
            <nav>
              <Link to="/" activeClassName={classes.navigationIsActive}>
                home
              </Link>
              <Link to="/about-me/" activeClassName={classes.navigationIsActive}>
                about
              </Link>
              <Link to="/portfolio/" activeClassName={classes.navigationIsActive}>
                projects
              </Link>
            </nav>
          </div>
          <HeaderNavToggle open={this.state.open} handleToggle={(): void => this.handleToggle()} />
        </div>
      </header>
    )
  }
}

export default Header
