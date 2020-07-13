import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import './custom.scss'


export function  App() {
  static displayName = App.name

  render() {
    return <p>App!</p>
  }
}
