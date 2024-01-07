import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import Layout from './components/Layout/Layout';
import ProdusePage from './Screens/ProdusePage';
import CreateProdus from './Screens/CreateProdusPage';
import SignInPage from './Screens/SignInPage';
import SignUpPage from './Screens/SignUpPage';
import UpdatePage from './Screens/UpdatePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import ProdusEditPage from './Screens/ProdusEditPage';
import CalculatorRulouriAluminiuPage from './Screens/CalculatorRulouriAluminiuPage';
import CosCumparaturi from './Screens/CosCumparaturi';
import ComenziSinglePage from './Screens/ComenziSinglePage';
import ComandaSinglePage from './Screens/ComandaSinglePage';
import ComenziGeneralePage from './Screens/ComenziGeneralePage';
import CreateProdusCuPlasa from './Screens/CreateProdusCuPlasaPage';
import CalculatorRulouriAluminiuCuPlasaPage from './Screens/CalculatorRulouriAluminiuCuPlasaPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="bottom-center" limit={1} />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />

            {/* ProtectedRoute */}

            <Route
              path="/rulourialuminiu"
              element={
                <ProtectedRoute>
                  <CalculatorRulouriAluminiuPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rulourialuminiucuplasa"
              element={
                <ProtectedRoute>
                  <CalculatorRulouriAluminiuCuPlasaPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comenzi"
              element={
                <ProtectedRoute>
                  <ComenziSinglePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comenzigenerale"
              element={
                <AdminRoute>
                  <ComenziGeneralePage />
                </AdminRoute>
              }
            />
            <Route
              path="/finalizeaza"
              element={
                <ProtectedRoute>
                  <CosCumparaturi />
                </ProtectedRoute>
              }
            />

            {/*Admin Route */}
            <Route
              path="/signup"
              element={
                <AdminRoute>
                  <SignUpPage />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/produs/:id"
              element={
                <ProtectedRoute>
                  <ProdusEditPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/oferta/:id"
              element={
                <ProtectedRoute>
                  <ComandaSinglePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/produse"
              element={
                <AdminRoute>
                  <ProdusePage />{' '}
                </AdminRoute>
              }
            />
            <Route
              path="/produsnouruloualuminiusimplu"
              element={
                <AdminRoute>
                  <CreateProdus />
                </AdminRoute>
              }
            />
            <Route
              path="/produsnouruloualuminiucuplasa"
              element={
                <AdminRoute>
                  <CreateProdusCuPlasa />
                </AdminRoute>
              }
            />

            <Route path="/update" element={<UpdatePage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
