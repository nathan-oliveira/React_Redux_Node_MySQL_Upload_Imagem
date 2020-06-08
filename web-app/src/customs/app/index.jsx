import React from 'react'
import { BrowserRouter} from "react-router-dom";

import Menu from '../menu/menu'
import Routes from '../../routes/routes'

export default props => (
  <BrowserRouter>
    <Menu />
    <Routes />
  </BrowserRouter>
)