import React from "react"
import "./App.css"
import Landing from "./pages/Landing"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Journal from "./pages/Journal"
import TradingPlan from "./pages/TradingPlan"
import TradesTaken from "./pages/TradesTaken"
import TradingGoals from "./pages/TradingGoals"
import PrivateRoute from "./pages/PrivateRoute"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<Layout />}>
          <Route
            path="journaler/home"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="journaler/journal"
            element={
              <PrivateRoute>
                <Journal />
              </PrivateRoute>
            }
          />
          <Route
            path="journaler/trading-plan"
            element={
              <PrivateRoute>
                <TradingPlan />
              </PrivateRoute>
            }
          />
          <Route
            path="journaler/trades"
            element={
              <PrivateRoute>
                <TradesTaken />
              </PrivateRoute>
            }
          />
          <Route
            path="journaler/trading-goal"
            element={
              <PrivateRoute>
                <TradingGoals />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
