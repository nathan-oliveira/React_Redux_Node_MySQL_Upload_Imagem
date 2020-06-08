import React from 'react'
import { Route, Switch } from "react-router-dom"

import ProdutoList from '../components/ProdutoList/ProdutoList'
import ProdutoForm from '../components/ProdutoForm/ProdutoForm'

export default props => (
  <Switch>
    <Route exact path="/" component={ProdutoList} />
    <Route path="/cadastrar" component={ProdutoForm} />
  </Switch>
)