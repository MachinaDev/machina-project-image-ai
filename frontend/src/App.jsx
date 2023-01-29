import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import  machinaLogo  from './assets/machinaLogo.png';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
		<header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
			

      <Link to="/">
			<div className="flex flex-row justify-around items-center" >
				<img src={logo} alt="logo" className="w-28 object-contain mx-4" />
					<p>by</p>
					<img src={machinaLogo} alt="logo" className="w-14 object-contain mx-4" />
			</div>
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Créer</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
