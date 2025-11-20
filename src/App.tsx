import { Routes, Route, Navigate } from "react-router-dom";

import MarketingLayout from "./layouts/MarketingLayout";
import DocsLayout from "./layouts/DocsLayout";

import Home from "./pages/Home";

import GettingStarted from "./pages/docs/GettingStarted";
import ModulesOverview from "./pages/docs/ModulesOverview";
import ApiOverview from "./pages/docs/ApiOverview";
import CartBoard from "./pages/docs/CartBoard";
import ReviewMiner from "./pages/docs/ReviewMiner";
import ReviewCleaner from "./pages/docs/ReviewCleaner";
import UserBrush from "./pages/docs/UserBrush";
import ReviewChain from "./pages/docs/ReviewChain";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<DocsLayout />}>
        <Route
          path="/docs"
          element={<Navigate to="/docs/getting-started" replace />}
        />

        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/modules" element={<ModulesOverview />} />
        <Route path="docs/api-overview" element={<ApiOverview />} />
        <Route path="/docs/modules/review-miner" element={<ReviewMiner />} />
        <Route path="/docs/modules/cart-board" element={<CartBoard />} />
        <Route
          path="/docs/modules/review-cleaner"
          element={<ReviewCleaner />}
        />
        <Route path="/docs/modules/userbrush" element={<UserBrush />} />
        <Route path="/docs/modules/review-chain" element={<ReviewChain />} />
      </Route>
    </Routes>
  );
}
