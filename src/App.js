import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSite, setSelectedSite] = useState(null);

  const goHome = () => {
    setCurrentPage('home');
    setSelectedSite(null);
  };

  const goAbout = () => {
    setCurrentPage('about');
    setSelectedSite(null);
  };

  const goDestinations = () => {
    setCurrentPage('destinations');
    setSelectedSite(null);
  };

  // Ito yung function na tatawag kapag pinindot yung card
  const openSite = (siteName) => {
    setSelectedSite(siteName);
    setCurrentPage('destinations');
  };

  return (
    <div className="main-container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="/bolinao.jpg" alt="Logo" className="logo-img" />
          <div>
            <h1>BOLINAO</h1>
            <p>PANGASINAN</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#" onClick={goHome}>Home</a>
          <a href="#" onClick={goDestinations}>Destinations</a>
          <a href="#" onClick={goAbout}>About Bolinao</a>
        </nav>
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </header>

      {/* HERO SECTION (Home) */}
      {currentPage === 'home' && (
        <>
          <section className="hero">
            <img src="/bolinaofalls.png" alt="Bolinao Falls" className="hero-bg" />
            <div className="hero-content">
              <span className="hero-subtitle">WELCOME TO BOLINAO</span>
              <h2>Discover<br />Bolinao<br />Pangasinan</h2>
              <p>Explore breathtaking beaches, historical landmarks, and natural wonders in the Pearl of the Philippines.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={goDestinations}><i className="fas fa-search"></i> Explore Destinations</button>
                <button className="btn btn-outline" onClick={goAbout}><i className="fas fa-info"></i> Learn more about Bolinao</button>
              </div>
            </div>
          </section>

          {/* FEATURED DESTINATION */}
          <section className="featured-section">
            <h3 className="featured-title">Featured Destination</h3>
            <div className="cards-grid">
              {/* Patar Beach */}
              <div className="card" onClick={() => openSite('Patar Beach')}>
                <img src="/patar.png" alt="Patar Beach" />
                <div className="card-overlay">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>PATAR BEACH</span>
                </div>
              </div>

              {/* Enchanted Cave */}
              <div className="card" onClick={() => openSite('Enchanted Cave')}>
                <img src="/enchantedcave.png" alt="Enchanted Cave" />
                <div className="card-overlay">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>ENCHANTED CAVE</span>
                </div>
              </div>

              {/* Lighthouse */}
              <div className="card" onClick={() => openSite('Lighthouse')}>
                <img src="/lighthouse.png" alt="Lighthouse" />
                <div className="card-overlay">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>LIGHTHOUSE</span>
                </div>
              </div>

              {/* Bolinao Falls */}
              <div className="card" onClick={() => openSite('Bolinao Falls')}>
                <img src="/bolinaofalls.png" alt="Bolinao Falls" />
                <div className="card-overlay">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>BOLINAO FALLS</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* DESTINATIONS SECTION */}
      {currentPage === 'destinations' && (
        <section className="destinations-section">
          <h1 className="destinations-title">Destinations</h1>
          <div className="destination-list">
            
            {/* KUNG PININDOT ANG PATAR BEACH */}
            {selectedSite === 'Patar Beach' && (
              <div className="destination-item">
                <div className="destination-image">
                  <img src="/patar.png" alt="Patar Beach" />
                </div>
                <div className="destination-info">
                  <h2>PATAR BEACH</h2>
                  <p>Patar Beach is a beautiful white sand beach in Bolinao. It is known for its stunning sunsets, rock formations, and crystal-clear waters.</p>
                </div>
              </div>
            )}

            {/* KUNG PININDOT ANG ENCHANTED CAVE */}
            {selectedSite === 'Enchanted Cave' && (
              <div className="destination-item">
                <div className="destination-image">
                  <img src="/enchantedcave.png" alt="Enchanted Cave" />
                </div>
                <div className="destination-info">
                  <h2>Enchanted Cave</h2>
                  <p>Enchanted Cave is a famous cave in Bolinao with an underground pool. Visitors can swim in its crystal-clear water while enjoying the beautiful rock formations.</p>
                </div>
              </div>
            )}

            {/* KUNG PININDOT ANG LIGHTHOUSE */}
            {selectedSite === 'Lighthouse' && (
              <div className="destination-item">
                <div className="destination-image">
                  <img src="/lighthouse.png" alt="Cape Bolinao Lighthouse" />
                </div>
                <div className="destination-info">
                  <h2>Cape Bolinao Lighthouse</h2>
                  <p>The Cape Bolinao Lighthouse is a historic lighthouse that offers a panoramic view of the West Philippine Sea. It is one of the oldest lighthouses in the Philippines.</p>
                </div>
              </div>
            )}

            {/* KUNG PININDOT ANG BOLINAO FALLS */}
            {selectedSite === 'Bolinao Falls' && (
              <div className="destination-item">
                <div className="destination-image">
                  <img src="/bolinaofalls.png" alt="Bolinao Falls" />
                </div>
                <div className="destination-info">
                  <h2>Bolinao Falls</h2>
                  <p>Bolinao Falls is a series of waterfalls located in the lush forests of Bolinao. It is a perfect place for swimming and cliff-jumping.</p>
                </div>
              </div>
            )}

            {/* KUNG WALANG PINILING CARD, ITO YUNG BUONG LISTAHAN */}
            {selectedSite === null && (
              <>
                <div className="destination-item">
                  <div className="destination-image">
                    <img src="/patar.png" alt="Patar Beach" />
                  </div>
                  <div className="destination-info">
                    <h2>PATAR BEACH</h2>
                    <p>Patar Beach is a beautiful white sand beach in Bolinao. It is known for its stunning sunsets, rock formations, and crystal-clear waters.</p>
                  </div>
                </div>

                <div className="destination-item">
                  <div className="destination-image">
                    <img src="/enchantedcave.png" alt="Enchanted Cave" />
                  </div>
                  <div className="destination-info">
                    <h2>Enchanted Cave</h2>
                    <p>Enchanted Cave is a famous cave in Bolinao with an underground pool. Visitors can swim in its crystal-clear water while enjoying the beautiful rock formations.</p>
                  </div>
                </div>

                <div className="destination-item">
                  <div className="destination-image">
                    <img src="/bolinaofalls.png" alt="Bolinao Falls" />
                  </div>
                  <div className="destination-info">
                    <h2>Bolinao Falls</h2>
                    <p>Bolinao Falls is a series of waterfalls located in the lush forests of Bolinao. It is a perfect place for swimming and cliff-jumping.</p>
                  </div>
                </div>

                <div className="destination-item">
                  <div className="destination-image">
                    <img src="/lighthouse.png" alt="Cape Bolinao Lighthouse" />
                  </div>
                  <div className="destination-info">
                    <h2>Cape Bolinao Lighthouse</h2>
                    <p>The Cape Bolinao Lighthouse is a historic lighthouse that offers a panoramic view of the West Philippine Sea. It is one of the oldest lighthouses in the Philippines.</p>
                  </div>
                </div>
              </>
            )}

          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      {currentPage === 'about' && (
        <section className="about-section">
          <h1 className="about-title">About Bolinao</h1>
          <div className="about-content">
            <div className="about-image">
              <img src="/bolinao.jpg" alt="Bolinao Beach" />
            </div>
            <div className="about-text">
              <h3>Bolinao, Pangasinan</h3>
              <p>
                Bolinao, Pangasinan is a beautiful coastal destination known for its
                beaches, waterfalls, caves, and historic landmarks. It offers visitors
                a mix of nature, adventure, and cultural experiences, making it a
                great place to relax and explore.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;