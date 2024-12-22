import React, { lazy, Suspense } from "react";
import "./App.css"
import Landing from "./pages/Landing"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import TradingPlan from "./pages/TradingPlan";
import TradesTaken from "./pages/TradesTaken";
import TradingGoals from "./pages/TradingGoals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          element={
            <Suspense fallback={<div>Loading Layout...</div>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="journaler/home"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="journaler/journal"
            element={
              <Suspense fallback={<div>Loading Journal...</div>}>
                <Journal />
              </Suspense>
            }
          />
          <Route
            path="journaler/trading-plan"
            element={
              <Suspense fallback={<div>Loading plan...</div>}>
                <TradingPlan />
              </Suspense>
            }
          />
          <Route
            path="journaler/trades"
            element={
              <Suspense fallback={<div>Loading trades...</div>}>
                <TradesTaken />
              </Suspense>
            }
          />
          <Route
            path="journaler/trading-goal"
            element={
              <Suspense fallback={<div>Loading trading goal...</div>}>
                <TradingGoals />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
