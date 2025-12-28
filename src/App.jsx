// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
// import Aside from "./components/Aside"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import Main from "./components/Main"
// import { Provider } from "react-redux"
// import { store } from "./store"
// function App() {
//   return <>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route element={
//             <div className="grid">
//               <Aside fname="Ram" age={23} />
//               <Main />
//             </div>
//           } path="/" />
//           <Route element={<About />} path="/about" />
//           <Route element={<Contact />} path="/contact" />
//         </Routes>
//         <Footer name="react" />
//       </BrowserRouter>
//     </Provider>
//   </>
// }
// export default App

import Footer from "./components/Footer"
import Header from "./components/Header"
import PhotoGallery from "./components/Main/MainConatiner"
import { Provider } from "react-redux"
import { store } from "./store"

const App = () => {
  return <>
    {/* <Header/>
  <PhotoGallery/>
  <About/>
  <Contact/>
  <Footer/> */}
    <Provider store={store}>
      <BrowserRouter>
        <Header username="Raja" />
        <Routes>
          <Route path="/" element={<PhotoGallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </>
}
export default App