import { useState } from 'react'
import stockMarketImg from '../assets/images/stock-market.svg'
import tradingIcon from '../assets/images/trading-icon.svg'
import '../styles/SecondaryMarkets.css'

const SecondaryMarkets = () => {
  const [selectedMarket, setSelectedMarket] = useState('stocks')

  const marketData = {
    stocks: {
      title: 'Stock Markets',
      description: 'Trade existing company shares on established exchanges like NYSE, NASDAQ, and international markets.',
      examples: ['Apple Inc. (AAPL)', 'Microsoft Corp. (MSFT)', 'Amazon.com Inc. (AMZN)', 'Tesla Inc. (TSLA)'],
      volume: '$25.7 trillion daily volume',
      participants: 'Individual investors, institutional investors, pension funds'
    },
    bonds: {
      title: 'Bond Markets',
      description: 'Secondary trading of government and corporate bonds after their initial issuance.',
      examples: ['US Treasury Bonds', 'Corporate Bonds', 'Municipal Bonds', 'International Bonds'],
      volume: '$119 trillion market size',
      participants: 'Banks, insurance companies, mutual funds, pension funds'
    },
    forex: {
      title: 'Foreign Exchange (Forex)',
      description: 'Currency trading market where existing currencies are exchanged between parties.',
      examples: ['EUR/USD', 'GBP/JPY', 'USD/CHF', 'AUD/NZD'],
      volume: '$6.6 trillion daily volume',
      participants: 'Central banks, commercial banks, hedge funds, corporations'
    },
    crypto: {
      title: 'Cryptocurrency Markets',
      description: 'Digital asset trading on various exchanges for existing cryptocurrencies.',
      examples: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Binance Coin (BNB)', 'Cardano (ADA)'],
      volume: '$50+ billion daily volume',
      participants: 'Retail traders, institutions, crypto funds, exchanges'
    }
  }

  const features = [
    {
      title: 'Liquidity',
      description: 'Easy buying and selling of existing securities',
      icon: '💧'
    },
    {
      title: 'Price Discovery',
      description: 'Market-driven pricing through supply and demand',
      icon: '📊'
    },
    {
      title: 'Efficiency',
      description: 'Quick and transparent trading mechanisms',
      icon: '⚡'
    },
    {
      title: 'Risk Management',
      description: 'Diversification and hedging opportunities',
      icon: '🛡️'
    }
  ]

  return (
    <div className="secondary-markets">
      <header className="hero-section">
        <div className="container">
          <div className="hero-content">
            <img src={tradingIcon} alt="Trading Icon" className="hero-icon" />
            <h1>Secondary Markets</h1>
            <p className="hero-subtitle">
              Where existing securities change hands between investors
            </p>
            <img src={stockMarketImg} alt="Stock Market Chart" className="hero-chart" />
          </div>
        </div>
      </header>

      <section className="overview-section">
        <div className="container">
          <h2>What Are Secondary Markets?</h2>
          <p className="overview-text">
            Secondary markets are financial markets where previously issued securities
            are traded between investors. Unlike primary markets where new securities
            are issued, secondary markets provide liquidity and enable price discovery
            for existing investments.
          </p>
        </div>
      </section>

      <section className="market-types-section">
        <div className="container">
          <h2>Types of Secondary Markets</h2>
          <div className="market-tabs">
            {Object.keys(marketData).map((market) => (
              <button
                key={market}
                className={`tab-button ${selectedMarket === market ? 'active' : ''}`}
                onClick={() => setSelectedMarket(market)}
              >
                {marketData[market].title}
              </button>
            ))}
          </div>
          <div className="market-content">
            <h3>{marketData[selectedMarket].title}</h3>
            <p>{marketData[selectedMarket].description}</p>
            <div className="market-details">
              <div className="detail-card">
                <h4>Examples</h4>
                <ul>
                  {marketData[selectedMarket].examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-card">
                <h4>Market Size</h4>
                <p>{marketData[selectedMarket].volume}</p>
              </div>
              <div className="detail-card">
                <h4>Key Participants</h4>
                <p>{marketData[selectedMarket].participants}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Key Features of Secondary Markets</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits for Investors</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>🔄 Liquidity</h4>
              <p>Convert investments to cash quickly when needed</p>
            </div>
            <div className="benefit-item">
              <h4>📈 Capital Appreciation</h4>
              <p>Profit from price increases in securities over time</p>
            </div>
            <div className="benefit-item">
              <h4>🎯 Portfolio Diversification</h4>
              <p>Spread risk across different asset classes and markets</p>
            </div>
            <div className="benefit-item">
              <h4>💰 Income Generation</h4>
              <p>Earn dividends, interest, and other regular payments</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <p>&copy; 2024 Secondary Markets Guide. Educational content about financial markets.</p>
        </div>
      </footer>
    </div>
  )
}

export default SecondaryMarkets